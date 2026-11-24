const jog = { category: 'CARDIO', target: 'AEROBIC ENDURANCE', anatomy: 'Steady jogging', name: '20-minute jog', sets: 1, setLabel: 'SESSION', reps: '20 minutes', description: 'Keep a comfortable, steady pace for the full session.', muscle: 'legs' };

const coreLegs = [
  { category: 'LEGS', target: 'QUADRICEPS + GLUTES', anatomy: 'Bodyweight squat', name: 'Bodyweight squats', sets: 3, reps: '15 reps', description: 'Squat under control, keeping your feet planted and chest lifted.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'LEGS + GLUTES', anatomy: 'Single-leg movement', name: 'Reverse lunges', sets: 3, reps: '10 each leg', description: 'Step back into a lunge, then return to standing. Complete both sides.', muscle: 'legs glutes' },
  { category: 'GLUTES', target: 'GLUTES', anatomy: 'Gluteus maximus', name: 'Glute bridges', sets: 3, reps: '15 reps', description: 'Lift your hips by squeezing your glutes, then lower with control.', muscle: 'glutes' },
  { category: 'CORE', target: 'CORE', anatomy: 'Abdominals · trunk stabilizers', name: 'Plank', sets: 3, reps: '20 seconds', description: 'Hold a straight, steady body position for each interval.', muscle: 'core' },
  { category: 'CORE', target: 'CORE', anatomy: 'Abdominals · hip flexors', name: 'Dead bugs', sets: 3, reps: '10 reps', description: 'Move opposite arm and leg slowly while keeping your lower back steady.', muscle: 'core' },
];

const coreEndurance = [
  { category: 'LEGS', target: 'LEGS + GLUTES', anatomy: 'Step-up movement', name: 'Step-ups', sets: 3, reps: '10 each leg', description: 'Use a stable step and complete each side with control.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'QUADRICEPS', anatomy: 'Isometric leg hold', name: 'Wall sit', sets: 3, reps: '20 seconds', description: 'Hold a seated position against the wall for each interval.', muscle: 'legs' },
  { category: 'CORE', target: 'CORE + GLUTES', anatomy: 'Trunk stabilizers', name: 'Bird dogs', sets: 3, reps: '10 each side', description: 'Reach opposite arm and leg while keeping your torso stable.', muscle: 'core glutes' },
  { category: 'CORE', target: 'LOWER CORE', anatomy: 'Abdominals', name: 'Reverse crunches', sets: 3, reps: '10 reps', description: 'Curl your hips gently off the floor, then lower with control.', muscle: 'core' },
  { category: 'CORE', target: 'OBLIQUES + CORE', anatomy: 'Obliques · trunk stabilizers', name: 'Side plank', sets: 2, reps: '15 seconds each side', description: 'Hold each side for the interval while keeping your hips lifted.', muscle: 'core' },
];

const saturdayConditioning = [
  jog,
  { category: 'LEGS', target: 'QUADRICEPS + GLUTES', anatomy: 'Bodyweight squat', name: 'Bodyweight squats', sets: 2, reps: '15 reps', description: 'Squat under control, keeping your feet planted and chest lifted.', muscle: 'legs glutes' },
  { category: 'CONDITIONING', target: 'CORE + SHOULDERS', anatomy: 'Full-body conditioning', name: 'Mountain climbers', sets: 2, reps: '20 seconds', description: 'Alternate driving your knees forward from a strong plank position.', muscle: 'core shoulders' },
  { category: 'CORE', target: 'CORE', anatomy: 'Abdominals · trunk stabilizers', name: 'Plank', sets: 2, reps: '20 seconds', description: 'Hold a straight, steady body position for each interval.', muscle: 'core' },
];

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const sessions = { 0: [jog], 1: coreLegs, 2: [jog], 3: coreEndurance, 4: [jog], 5: saturdayConditioning };
const splitNames = { 0: 'JOGGING', 1: 'CORE + LEGS', 2: 'JOGGING', 3: 'CORE + ENDURANCE', 4: 'JOGGING', 5: 'JOG + CONDITIONING' };
const dayPicker = document.querySelector('#day-picker');
const today = new Date();
const dayOffset = (today.getDay() + 6) % 7;
const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - dayOffset);
const dateKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const selectedDates = dayNames.map((_, i) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i));
let selectedDay = dayOffset;
let currentIndex = 0;
let setState = [];
let advanceTimer;

const els = Object.fromEntries(['day-title','day-subtitle','today-label','week-label','panel-kicker','panel-count','deck-wrap','exercise-card','target-title','target-caption','art-index','exercise-category','exercise-name','exercise-description','set-total','exercise-reps','weight-row','exercise-weight','set-controls','progress-label','progress-fill','progress-percent','swipe-hint','rest-card','complete-card','next-session','complete-stat-count','reset-button'].map(id => [id, document.getElementById(id)]));

function loadState() {
  const key = `form-workout-saps:${dateKey(selectedDates[selectedDay])}`;
  try { setState = JSON.parse(localStorage.getItem(key)) || []; } catch { setState = []; }
  const exercises = sessions[selectedDay] || [];
  setState = exercises.map((exercise, i) => Array.from({ length: exercise.sets }, (_, n) => Boolean(setState[i]?.[n])));
  currentIndex = Math.max(0, setState.findIndex(sets => !sets.every(Boolean)));
  if (setState.every(sets => sets.every(Boolean)) && exercises.length) currentIndex = exercises.length;
}

function saveState() {
  try { localStorage.setItem(`form-workout-saps:${dateKey(selectedDates[selectedDay])}`, JSON.stringify(setState)); } catch { /* Storage may be unavailable in private browsing. */ }
}

function renderDays() {
  dayPicker.innerHTML = '';
  dayNames.forEach((name, i) => {
    const date = selectedDates[i];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `day-chip${i === selectedDay ? ' active' : ''}${i === dayOffset ? ' today' : ''}`;
    button.setAttribute('aria-label', `${name}, ${date.toLocaleDateString('en', { month: 'long', day: 'numeric' })}${i === dayOffset ? ', today' : ''}`);
    button.setAttribute('aria-pressed', String(i === selectedDay));
    button.innerHTML = `<span>${name.slice(0, 3).toUpperCase()}</span><span class="chip-date">${date.getDate()}</span>`;
    button.addEventListener('click', () => selectDay(i));
    dayPicker.append(button);
  });
}

function selectDay(index) {
  clearTimeout(advanceTimer);
  selectedDay = index;
  loadState();
  render();
}

function completedCount() { return setState.filter(sets => sets?.every(Boolean)).length; }

function nextWorkoutDay(fromDay) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const candidate = (fromDay + offset) % 7;
    if (sessions[candidate]) return candidate;
  }
  return 0;
}

function render() {
  // The deck reuses one card element; clear any previous card's exit animation before repainting it.
  els['exercise-card'].classList.remove('leaving');
  const exercises = sessions[selectedDay] || [];
  const isRest = exercises.length === 0;
  const date = selectedDates[selectedDay];
  renderDays();
  els['day-title'].innerHTML = `${dayNames[selectedDay]}<span class="heading-period">.</span>`;
  els['today-label'].textContent = selectedDay === dayOffset ? 'TODAY' : date.toLocaleDateString('en', { month: 'short', day: 'numeric' }).toUpperCase();
  els['week-label'].textContent = 'WEEKLY REMINDER';
  const activityLabel = exercises.length === 1 ? 'SESSION' : 'EXERCISES';
  els['day-subtitle'].innerHTML = isRest ? 'REST DAY <span>·</span> RECOVER' : `${splitNames[selectedDay]} <span>·</span> ${exercises.length} ${activityLabel}`;
  els['panel-kicker'].textContent = isRest ? 'YOUR WEEKLY RHYTHM' : selectedDay === dayOffset ? 'TODAY’S SESSION' : `${dayNames[selectedDay].toUpperCase()} SESSION`;
  els['deck-wrap'].classList.toggle('hidden', isRest || currentIndex >= exercises.length);
  els['rest-card'].classList.toggle('hidden', !isRest);
  els['complete-card'].classList.toggle('hidden', isRest || currentIndex < exercises.length);
  els['panel-count'].classList.toggle('hidden', isRest);
  els['progress-label'].parentElement.classList.toggle('hidden', isRest);
  els['swipe-hint'].classList.toggle('hidden', isRest || currentIndex >= exercises.length);

  if (isRest) {
    const nextDay = nextWorkoutDay(selectedDay);
    els['next-session'].textContent = `${dayNames[nextDay].toUpperCase()} · ${splitNames[nextDay]}`;
    return;
  }

  const done = completedCount();
  const pct = Math.round(done / exercises.length * 100);
  els['progress-label'].textContent = `${done} OF ${exercises.length} ${exercises.length === 1 ? 'SESSION' : 'EXERCISES'}`;
  els['progress-fill'].style.width = `${pct}%`;
  els['progress-percent'].textContent = `${pct}%`;
  els['complete-stat-count'].textContent = exercises.length;
  if (currentIndex >= exercises.length) {
    els['panel-count'].innerHTML = `${exercises.length} <i>/ ${exercises.length}</i>`;
    return;
  }

  const exercise = exercises[currentIndex];
  const number = String(currentIndex + 1).padStart(2, '0');
  els['panel-count'].innerHTML = `${number} <i>/ ${String(exercises.length).padStart(2, '0')}</i>`;
  els['target-title'].textContent = exercise.target;
  els['target-caption'].textContent = exercise.anatomy;
  els['art-index'].innerHTML = `${number} <span>—</span> ${String(exercises.length).padStart(2, '0')}`;
  els['exercise-category'].textContent = exercise.category;
  els['exercise-name'].textContent = exercise.name;
  els['exercise-description'].textContent = exercise.description;
  els['set-total'].textContent = exercise.setLabel || `${exercise.sets} SETS`;
  els['exercise-reps'].textContent = exercise.reps;
  els['weight-row'].classList.toggle('hidden', !exercise.weight);
  if (exercise.weight) els['exercise-weight'].textContent = exercise.weight;
  document.querySelectorAll('.muscle-zone').forEach(zone => zone.classList.toggle('on', exercise.muscle.split(' ').some(muscle => zone.classList.contains(`zone-${muscle}`))));
  els['set-controls'].innerHTML = '';
  setState[currentIndex].forEach((checked, setNumber) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `set-button${checked ? ' done' : ''}`;
    button.setAttribute('aria-label', `Set ${setNumber + 1}${checked ? ', completed' : ', mark complete'}`);
    button.setAttribute('aria-pressed', String(checked));
    button.innerHTML = `<span>${setNumber + 1}</span>`;
    button.addEventListener('click', () => toggleSet(setNumber));
    els['set-controls'].append(button);
  });
}

function toggleSet(setNumber) {
  if (!sessions[selectedDay] || currentIndex >= sessions[selectedDay].length) return;
  setState[currentIndex][setNumber] = !setState[currentIndex][setNumber];
  saveState();
  render();
  if (setState[currentIndex].every(Boolean)) {
    els['exercise-card'].classList.add('leaving');
    advanceTimer = setTimeout(() => {
      currentIndex += 1;
      saveState();
      render();
    }, 230);
  }
}

els['reset-button'].addEventListener('click', () => {
  clearTimeout(advanceTimer);
  if (sessions[selectedDay]) {
    setState = sessions[selectedDay].map(exercise => Array(exercise.sets).fill(false));
    currentIndex = 0;
    saveState();
    render();
  }
});

document.querySelector('#date-button').addEventListener('click', () => selectDay(dayOffset));

render();
