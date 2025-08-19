* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #333;
  background: linear-gradient(270deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
  background-size: 800% 800%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  margin-bottom: 0.3rem;
  animation: fadeInDown 1s ease forwards;
}

h2 {
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.5s;
}

.carta {
  background: linear-gradient(135deg, #ffffffd9, #fef9f9d9, #ffffffd9, #fef9f9d9);
  border-radius: 25px;
  padding: 2rem;
  max-width: 650px;
  margin: auto;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  font-size: 1.15rem;
  line-height: 1.7;
  text-align: justify;
  position: relative;
  min-height: 180px;
  transform: translateY(50px);
  opacity: 0;
  animation: fadeInUp 1s ease forwards 1s, gradientCarta 20s ease infinite;
  background-size: 400% 400%;
}

.carta::before {
  content: "💌";
  font-size: 2.5rem;
  position: absolute;
  top: -20px;
  left: 20px;
}

#cursor {
  display: inline;
  font-weight: bold;
  color: #6a5acd;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradientCarta {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 500px) {
  h1 { font-size: 2.2rem; }
  h2 { font-size: 1.2rem; }
  .carta { padding: 1.5rem; font-size: 1rem; }
}
