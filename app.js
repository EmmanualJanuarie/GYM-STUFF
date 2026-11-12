const upperBody = [
  { category: 'CHEST', target: 'CHEST', anatomy: 'Pectoralis major', name: 'Dumbbell chest press', description: 'Main compound move for overall pec mass.', weight: '17.5 kg › 22.5 kg › 20 kg', muscle: 'chest' },
  { category: 'CHEST', target: 'CHEST', anatomy: 'Pectoralis major', name: 'Dumbbell chest flies', description: 'Isolation move to stretch and target the pecs.', weight: '10 kg dumbbells', muscle: 'chest' },
  { category: 'CHEST', target: 'CHEST + LATS', anatomy: 'Pectorals · latissimus dorsi', name: 'Dumbbell pullovers', description: 'A finishing stretch that works both chest and lats.', weight: '7.5 kg dumbbells', muscle: 'chest back' },
  { category: 'CHEST', target: 'CHEST + TRICEPS', anatomy: 'Pectorals · triceps', name: 'Narrow-grip dumbbell press', description: 'A high-rep finisher with a close hand position.', weight: '7.5 kg dumbbells', muscle: 'chest triceps' },
  { category: 'BACK', target: 'MID BACK', anatomy: 'Rhomboids · latissimus dorsi', name: 'Overhand bent-over row', description: 'Keep your torso more horizontal; pull the bar to your lower belly.', muscle: 'back' },
  { category: 'BACK', target: 'LOWER LATS', anatomy: 'Latissimus dorsi · biceps', name: 'Underhand bent-over row', description: 'Keep your torso more upright and pull toward your upper belly.', muscle: 'back biceps' },
  { category: 'BACK', target: 'UPPER BACK', anatomy: 'Trapezius · rhomboids', name: 'Pendlay row', description: 'Start each rep from the floor with your torso parallel to it.', muscle: 'back' },
  { category: 'BACK', target: 'POSTERIOR CHAIN', anatomy: 'Hamstrings · glutes · lower back', name: 'Romanian deadlift', description: 'Hinge at the hips with a slight knee bend; slide the bar down your thighs.', muscle: 'legs glutes' },
  { category: 'SHOULDERS', target: 'FRONT DELTS', anatomy: 'Anterior deltoid', name: 'Seated dumbbell shoulder press', description: 'Press from shoulder height overhead, with support from your side delts.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'SIDE DELTS', anatomy: 'Medial deltoid', name: 'Seated dumbbell lateral raise', description: 'Lift out to the sides until your dumbbells reach shoulder level.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'FRONT DELTS', anatomy: 'Anterior deltoid', name: 'Seated dumbbell front raise', description: 'Raise your dumbbells straight in front of you to shoulder height.', muscle: 'shoulders' },
  { category: 'SHOULDERS', target: 'REAR DELTS', anatomy: 'Posterior deltoid', name: 'Seated dumbbell bent-over reverse fly', description: 'Hinge forward and fly your dumbbells out to the sides.', muscle: 'shoulders' },
  { category: 'BICEPS', target: 'BICEPS', anatomy: 'Biceps · short head', name: 'Lateral bicep curl with supination', description: 'Curl with palms facing in, rotating them outward at the top.', muscle: 'biceps' },
  { category: 'BICEPS', target: 'BICEPS', anatomy: 'Biceps · long head', name: 'Single-arm drag curl', description: 'Lean slightly and drag the dumbbell up along your torso.', muscle: 'biceps' },
  { category: 'BICEPS', target: 'BICEPS + FOREARMS', anatomy: 'Brachialis · brachioradialis', name: 'Cross-body hammer curl', description: 'Curl across your torso toward the opposite shoulder, keeping a neutral grip.', muscle: 'biceps forearms' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · lateral head', name: 'Bent-over dumbbell tricep kickbacks', description: 'Hinge at the hips and extend the dumbbell straight back.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · long head', name: 'Single-arm overhead dumbbell tricep extension', description: 'Hold one dumbbell overhead and lower it behind your head.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS', anatomy: 'Triceps · long head', name: 'Two-handed overhead dumbbell tricep extension', description: 'Use both hands on one dumbbell for a stable overhead extension.', muscle: 'triceps' },
  { category: 'TRICEPS', target: 'TRICEPS + CHEST', anatomy: 'Triceps · pectorals', name: 'Close-grip dumbbell press/extension', description: 'A narrow-grip press from your chest that emphasizes the triceps.', muscle: 'triceps chest' },
  { category: 'FOREARMS', target: 'INNER FOREARMS', anatomy: 'Wrist flexors', name: 'Dumbbell wrist curls', description: 'Use a palms-up, supinated grip to work the inner forearms.', muscle: 'forearms' },
  { category: 'FOREARMS', target: 'OUTER FOREARMS', anatomy: 'Wrist extensors', name: 'Dumbbell wrist extensions', description: 'Use a palms-down, pronated grip to work the outer forearms.', muscle: 'forearms' },
  { category: 'FOREARMS', target: 'FOREARMS', anatomy: 'Brachioradialis', name: 'Concentration hammer curls', description: 'Use a neutral hammer grip to emphasize the muscle along the top of the forearm.', muscle: 'forearms' },
  { category: 'FOREARMS', target: 'FOREARMS', anatomy: 'Radial wrist muscles', name: 'Dumbbell radial deviation', description: 'Hold one end of the dumbbell with both hands and move your wrist toward your thumb.', muscle: 'forearms' },
  { category: 'FOREARMS', target: 'FOREARMS', anatomy: 'Ulnar wrist muscles', name: 'Dumbbell ulnar deviation', description: 'Hold the dumbbell closer to your thumb and move your wrist toward your pinky.', muscle: 'forearms' },
];

const lowerBody = [
  { category: 'LEGS', target: 'HAMSTRINGS + GLUTES', anatomy: 'Posterior chain', name: 'Barbell Romanian deadlift', description: 'Hinge at the hips with a slight knee bend to target your posterior chain.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'QUADRICEPS', anatomy: 'Quadriceps', name: 'Dumbbell goblet squat', description: 'Hold one dumbbell close to your chest as you squat.', muscle: 'legs' },
  { category: 'LEGS', target: 'INNER THIGHS', anatomy: 'Adductors · glutes', name: 'Dumbbell sumo squat', description: 'Take a wide stance, point your toes out, and hold the dumbbell between your legs.', muscle: 'legs glutes' },
  { category: 'LEGS', target: 'QUADS + GLUTES', anatomy: 'Quadriceps · gluteus maximus', name: 'Barbell squat', description: 'Use a comfortable, deeper range of motion to emphasize your glutes.', muscle: 'legs glutes' },
];

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const sessions = { 0: upperBody, 1: lowerBody, 3: upperBody, 4: lowerBody };
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

const els = Object.fromEntries(['day-title','day-subtitle','today-label','week-label','panel-kicker','panel-count','deck-wrap','exercise-card','target-title','target-caption','art-index','exercise-category','exercise-name','exercise-description','weight-row','exercise-weight','set-controls','progress-label','progress-fill','progress-percent','swipe-hint','rest-card','complete-card','next-session','complete-stat-count','reset-button'].map(id => [id, document.getElementById(id)]));

function loadState() {
  const key = `form-workout:${dateKey(selectedDates[selectedDay])}`;
  try { setState = JSON.parse(localStorage.getItem(key)) || []; } catch { setState = []; }
  const exercises = sessions[selectedDay] || [];
  setState = exercises.map((_, i) => Array.isArray(setState[i]) ? [0, 1, 2].map(n => Boolean(setState[i][n])) : [false, false, false]);
  currentIndex = Math.max(0, setState.findIndex(sets => !sets.every(Boolean)));
  if (setState.every(sets => sets.every(Boolean)) && exercises.length) currentIndex = exercises.length;
}

function saveState() {
  try { localStorage.setItem(`form-workout:${dateKey(selectedDates[selectedDay])}`, JSON.stringify(setState)); } catch { /* Storage can be unavailable in private browsing. */ }
}

function renderDays() {
  dayPicker.innerHTML = '';
  dayNames.forEach((name, i) => {
    const button = document.createElement('button');
    const date = selectedDates[i];
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

function render() {
  // The deck reuses one card element; clear any previous card's exit animation
  // before painting the next exercise into it.
  els['exercise-card'].classList.remove('leaving');
  const exercises = sessions[selectedDay] || [];
  const isRest = exercises.length === 0;
  const date = selectedDates[selectedDay];
  renderDays();
  els['day-title'].innerHTML = `${dayNames[selectedDay]}<span class="heading-period">.</span>`;
  els['today-label'].textContent = selectedDay === dayOffset ? 'TODAY' : date.toLocaleDateString('en', { month: 'short', day: 'numeric' }).toUpperCase();
  els['week-label'].textContent = 'WEEKLY REMINDER';
  els['day-subtitle'].innerHTML = isRest ? 'REST DAY <span>·</span> RECOVER' : `${selectedDay === 0 || selectedDay === 3 ? 'UPPER BODY' : 'LOWER BODY'} <span>·</span> ${exercises.length} MOVES`;
  els['panel-kicker'].textContent = isRest ? 'YOUR WEEKLY RHYTHM' : selectedDay === dayOffset ? 'TODAY’S SESSION' : `${dayNames[selectedDay].toUpperCase()} SESSION`;
  els['deck-wrap'].classList.toggle('hidden', isRest || currentIndex >= exercises.length);
  els['rest-card'].classList.toggle('hidden', !isRest);
  els['complete-card'].classList.toggle('hidden', isRest || currentIndex < exercises.length);
  els['panel-count'].classList.toggle('hidden', isRest);
  els['progress-label'].parentElement.classList.toggle('hidden', isRest);
  els['swipe-hint'].classList.toggle('hidden', isRest || currentIndex >= exercises.length);

  if (isRest) {
    const nextDay = (selectedDay + 1) % 7;
    const nextSessionDay = [0, 1, 3, 4].includes(nextDay) ? nextDay : (nextDay === 2 || nextDay === 5 ? (nextDay === 2 ? 3 : 0) : 0);
    const split = nextSessionDay === 0 || nextSessionDay === 3 ? 'UPPER BODY' : 'LOWER BODY';
    els['next-session'].textContent = `${dayNames[nextSessionDay].toUpperCase()} · ${split}`;
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
    const card = els['exercise-card'];
    card.classList.add('leaving');
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
    setState = sessions[selectedDay].map(() => [false, false, false]);
    currentIndex = 0;
    saveState();
    render();
  }
});

document.querySelector('#date-button').addEventListener('click', () => selectDay(dayOffset));

render();
