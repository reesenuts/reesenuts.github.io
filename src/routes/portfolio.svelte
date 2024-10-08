<script> // i used chatgpt to generate this one hahaha lmao
    import { onMount } from "svelte";

  let currentDateTime = "";

  // Function to format the date and time
  function updateDateTime() {
  const now = new Date();
  const options = { 
      year: "numeric", month: "long", 
      day: "numeric", hour: "numeric", minute: "numeric", 
      hour12: true, timeZone: "Asia/Manila" 
  };
  
  // @ts-ignore
  currentDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
  }

  // Update the time every second
  onMount(() => {
  updateDateTime();  // Set initial time
  const interval = setInterval(updateDateTime, 1000);

  // Clear the interval when the component is destroyed
  return () => {
      clearInterval(interval);
  };
  });
</script>

<!-- section to be fixed -->
<section id="portfolio" style="display: flex; gap: 40px; ">
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; display: flex; flex-direction: column; justify-content: space-between; align-item: center; text-align: center; gap: 10px;">
      <div style="margin-top: 110px;">
        <p style="font-size: small;">2022-2023</p>
        <a href="./src/assets/advanced.calculator.jpg" target="_blank" style="text-decoration: none;">
        <h1 style="font-size: xx-large; font-weight: 600px;">advanced calculator</h1> </a>
        <p>Computer Programming 2</p>
      </div>
      <div>
        <p>Netbeans IDE Java</p>
      </div>
    </div>

    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; display: flex; flex-direction: column; justify-content: space-between; align-item: center; text-align: center; gap: 10px;">
      <div style="margin-top: 110px;">
        <p style="font-size: small;">2023-2024</p>
        <a href="./src/assets/todolist.jpg" target="_blank" style="text-decoration: none;">
        <h1 style="font-size: xx-large; font-weight: 600px;">todo list</h1> </a>
        <p>Object-Oriented Programming</p>
      </div>
      <div>
        <p>PHP MySQL</p>
      </div>
    </div>
</section>

<section style="display: flex; gap: 40px; ">
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; display: flex; flex-direction: column; justify-content: space-between; align-item: center; text-align: center; gap: 10px;">
      <div style="margin-top: 110px;">
        <p style="font-size: small;">2023-2024</p>
        <a href="./src/assets/crowdpilot.jpg" target="_blank" style="text-decoration: none;">
        <h1 style="font-size: xx-large; font-weight: 700px;">crowdpilot</h1> </a>
        <p>Application Development in Emerging Technologies</p>
      </div>
      <div>
        <p>Angular PHP Rest API</p>
      </div>
    </div>

    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; display: flex; flex-direction: column; justify-content: space-between; align-item: center; text-align: center; gap: 10px;">
      <div style="margin-top: 110px;">
        <p style="font-size: small;">2023-2024</p>
        <a href="./src/assets/kanban.board.jpg" target="_blank" style="text-decoration: none;">
        <h1 style="font-size: xx-large; font-weight: 600px;">kanban board</h1> </a>
        <p>Application Development in Emerging Technologies</p>
      </div>
      <div>
        <p>Angular PHP Rest API</p>
      </div>
    </div>
</section>

<!-- footer -->
<div class="footer" style="display: flex; flex-direction: column; justify-content: center; text-align: center; gap: 5px; margin-top: 40px;">
  <h1 style="font-family: 'Instrument Serif'; font-size: xx-large;"><span style="color: var(--paragraph); font-style: normal;">reese</span>nuts</h1>
  <h1 style="font-size: large;">{currentDateTime}</h1>
  <p style="font-size: small;">Local time in Manila, Philippines</p>
  <div class="buttons" style="display: flex; gap: 15px; align-items: center; justify-content: center; margin-top: 20px; ">
      <!-- github logo -->
      <a href="https://github.com/reesenuts" target="_blank" style="text-decoration: none;">
        <button style="height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8807 21.8254V17.8571C15.0187 16.6144 14.6624 15.3672 13.8886 14.3849C16.8648 14.3849 19.841 12.4008 19.841 8.92858C19.9204 7.6885 19.5732 6.46826 18.849 5.45635C19.1267 4.31548 19.1267 3.125 18.849 1.98413C18.849 1.98413 17.8569 1.98413 15.8728 3.47223C13.2537 2.97619 10.5553 2.97619 7.93627 3.47223C5.95214 1.98413 4.96008 1.98413 4.96008 1.98413C4.66246 3.125 4.66246 4.31548 4.96008 5.45635C4.23773 6.46417 3.88713 7.69126 3.96801 8.92858C3.96801 12.4008 6.9442 14.3849 9.92039 14.3849C9.53349 14.871 9.24579 15.4266 9.07714 16.0218C8.90849 16.6171 8.85889 17.2421 8.92833 17.8571M8.92833 17.8571V21.8254M8.92833 17.8571C4.45412 19.8413 3.96801 15.873 1.98389 15.873" stroke="#F5F5F8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </a>
      <!-- instagram button -->
      <a href="https://www.instagram.com/reese.nuts/" target="_blank">
        <button style="height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5F5F8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </button>
      </a>
  </div>
</div>