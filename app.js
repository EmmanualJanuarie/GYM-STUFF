const chestBack = [
  { category: 'CHEST', target: 'CHEST', anatomy: 'Pectoralis major', name: 'Barbell bench press', sets: 4, reps: '8–12', description: 'A compound press for overall chest strength.', muscle: 'chest' },
  { category: 'CHEST', target: 'UPPER CHEST', anatomy: 'Clavicular pectorals', name: 'Incline barbell bench press', sets: 4, reps: '8–12', description: 'Press on an incline to emphasize the upper chest.', muscle: 'chest' },
  { category: 'CHEST', target: 'CHEST + TRICEPS', anatomy: 'Pectorals · triceps', name: 'Close-grip barbell press', sets: 3, reps: '10–12', description: 'Use a close hand position to bring the triceps into the press.', muscle: 'chest triceps' },
  { category: 'CHEST', target: 'CHEST', anatomy: 'Pectoralis major', name: 'Dumbbell chest fly', sets: 4, reps: '10–15', description: 'Open your arms in a controlled arc to stretch and work the chest.', muscle: 'chest' },
  { category: 'CHEST', target: 'CHEST + LATS', anatomy: 'Pectorals · latissimus dorsi', name: 'Dumbbell pullover', sets: 3, reps: '10–12', description: 'Lower the dumbbell behind your head for a chest and lat stretch.', muscle: 'chest back' },
  { category: 'BACK', target: 'MID BACK', anatomy: 'Rhomboids · latissimus dorsi', name: 'Overhand barbell bent-over row', sets: 4, reps: '8–12', description: 'Keep your torso hinged and pull the bar toward your lower belly.', muscle: 'back' },
  { category: 'BACK', target: 'LOWER LATS', anatomy: 'Latissimus dorsi · biceps', name: 'Underhand barbell bent-over row', sets: 4, reps: '8–12', description: 'Use an underhand grip and pull the bar toward your upper belly.', muscle: 'back biceps' },
  { category: 'BACK', target: 'UPPER BACK', anatomy: 'Trapezius · rhomboids', name: 'Pendlay row', sets: 3, reps: '6–10', description: 'Start each strict rep from the floor with your torso parallel to it.', muscle: 'back' },
  { category: 'BACK', target: 'POSTERIOR CHAIN', anatomy: 'Hamstrings · glutes · lower back', name: 'Barbell Romanian deadlift', sets: 4, reps: '8–12', description: 'Hinge at the hips with a slight knee bend; keep the bar close to your legs.', muscle: 'legs glutes' },
  { category: 'BACK', target: 'REAR DELTS + BACK', anatomy: 'Posterior deltoid · upper back', name: 'Dumbbell reverse fly', sets: 3, reps: '12–15', description: 'Hinge forward and raise the dumbbells out to your sides.', muscle: 'shoulders back' },
];

const arms = [
  { category: 'BICEPS', target: 'BICEPS', anatomy: 'Biceps · short head', name: 'Supinating dumbbell curl', sets: 4, reps: '10–12', description: 'Rotate your palms outward as you curl toward your shoulders.', muscle: 'biceps' },
  { category: 'BICEPS', target: 'BICEPS', anatomy: 'Biceps · long head', name: 'Single-arm drag curl', sets: 3, reps: '10–12', description: 'Drag the dumbbell upward along your torso without swinging.', muscle: 'biceps' },
  { category: 'BICEPS', target: 'BICEPS + FOREARMS', anatomy: 'Brachialis · brachioradialis', name: 'Cross-body hammer curl', sets: 4, reps: '10–12', description: 'Curl across your body with a neutral, hammer-style grip.', muscle: 'biceps forearms' },
  { category: 'BICEPS', target: 'FOREARMS', anatomy: 'Brachioradialis', name: 'Concentration hammer curl', sets: 3, reps: '10–12', description: 'Keep a neutral grip to emphasize the muscle along the top of your forearm.', muscle: 'forearms' },
  { category: 'BICEPS', target: 'BICEPS', anatomy: 'Biceps brachii', name: 'Alternating dumbbell curl', sets: 3, reps: '10–12', description: 'Curl one dumbbell at a time while keeping your upper arm steady.', muscle: 'biceps' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · long head', name: 'Single-arm overhead extension', sets: 4, reps: '10–12', description: 'Lower one dumbbell behind your head, then extend your arm overhead.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · long head', name: 'Two-handed overhead extension', sets: 4, reps: '10–12', description: 'Hold one dumbbell with both hands and extend overhead.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · lateral head', name: 'Dumbbell kickbacks', sets: 3, reps: '12–15', description: 'Hinge forward and extend the dumbbells straight behind you.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS + CHEST', anatomy: 'Triceps · pectorals', name: 'Close-grip dumbbell press', sets: 4, reps: '8–12', description: 'Press the dumbbells from your chest with a close grip.', muscle: 'triceps chest' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps', name: 'Dumbbell skull crushers', sets: 3, reps: '10–12', description: 'Lower the dumbbells toward either side of your forehead, then extend.', muscle: 'triceps' },
];

const shouldersLegs = [
  { category: 'SHOULDERS', target: 'FRONT DELTS', anatomy: 'Anterior deltoid', name: 'Standing barbell shoulder press', sets: 4, reps: '8–12', description: 'Press the bar overhead from shoulder height while standing tall.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'SIDE DELTS', anatomy: 'Medial deltoid', name: 'Seated dumbbell lateral raise', sets: 4, reps: '12–15', description: 'Raise the dumbbells out to your sides to shoulder height.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'FRONT DELTS', anatomy: 'Anterior deltoid', name: 'Standing dumbbell front raise', sets: 3, reps: '10–12', description: 'Raise the dumbbells straight in front of you to shoulder height.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'REAR DELTS', anatomy: 'Posterior deltoid', name: 'Seated bent-over reverse fly', sets: 4, reps: '12–15', description: 'Hinge forward while seated and fly the dumbbells out to the sides.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'SHOULDERS + UPPER BACK', anatomy: 'Deltoids · trapezius', name: 'Dumbbell upright row', sets: 3, reps: '10–12', description: 'Guide the dumbbells upward in front of your body with control.', muscle: 'shoulders back' },
  { category: 'LEGS', target: 'QUADRICEPS + GLUTES', anatomy: 'Quadriceps · gluteus maximus', name: 'Barbell back squat', sets: 4, reps: '8–12', description: 'Brace your core and squat through a comfortable, controlled range.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'HAMSTRINGS + GLUTES', anatomy: 'Posterior chain', name: 'Barbell Romanian deadlift', sets: 4, reps: '8–12', description: 'Hinge at the hips with a slight knee bend to work the posterior chain.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'CALVES', anatomy: 'Gastrocnemius · soleus', name: 'Standing calf raises', sets: 4, reps: '12–20', description: 'Rise onto your toes, pause briefly, and lower with control.', muscle: 'legs' },
  { category: 'LEGS', target: 'CALVES', anatomy: 'Soleus', name: 'Seated calf raises', sets: 3, reps: '12–20', description: 'Raise and lower your heels while seated to work the calves.', muscle: 'legs' },
  { category: 'LEGS', target: 'INNER THIGHS + GLUTES', anatomy: 'Adductors · gluteus maximus', name: 'Barbell sumo squat', sets: 3, reps: '10–12', description: 'Take a wide stance with toes turned out and squat with control.', muscle: 'legs glutes' },
];

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const sessions = { 0: chestBack, 1: arms, 2: shouldersLegs, 4: chestBack, 5: arms, 6: shouldersLegs };
const splitNames = { 0: 'CHEST + BACK', 1: 'BICEPS + TRICEPS', 2: 'SHOULDERS + LEGS', 4: 'CHEST + BACK', 5: 'BICEPS + TRICEPS', 6: 'SHOULDERS + LEGS' };
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
  const key = `form-workout-v2:${dateKey(selectedDates[selectedDay])}`;
  try { setState = JSON.parse(localStorage.getItem(key)) || []; } catch { setState = []; }
  const exercises = sessions[selectedDay] || [];
  setState = exercises.map((exercise, i) => Array.from({ length: exercise.sets }, (_, n) => Boolean(setState[i]?.[n])));
  currentIndex = Math.max(0, setState.findIndex(sets => !sets.every(Boolean)));
  if (setState.every(sets => sets.every(Boolean)) && exercises.length) currentIndex = exercises.length;
}

function saveState() {
  try { localStorage.setItem(`form-workout-v2:${dateKey(selectedDates[selectedDay])}`, JSON.stringify(setState)); } catch { /* Storage may be unavailable in private browsing. */ }
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
  els['day-subtitle'].innerHTML = isRest ? 'REST DAY <span>·</span> RECOVER' : `${splitNames[selectedDay]} <span>·</span> ${exercises.length} MOVES`;
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
  els['progress-label'].textContent = `${done} OF ${exercises.length} EXERCISES`;
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
  els['set-total'].textContent = `${exercise.sets} SETS`;
  els['exercise-reps'].textContent = `${exercise.reps} reps`;
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
