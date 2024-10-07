<section id="portfolio" style="display: flex; gap: 40px; ">
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; "></div>
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%;"></div>
</section>

<section style="display: flex; gap: 40px; ">
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%; "></div>
    <div class="portfolio" style="border:1px solid var(--border); border-radius: 48px; background-color: var(--ui); height: 400px; width: 50%;"></div>
</section>

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

<div class="footer" style="display: flex; flex-direction: column; justify-content: center; text-align: center; gap: 5px; margin-top: 40px;">
  <h1 style="font-family: 'Instrument Serif'; font-size: xx-large;"><span style="color: var(--paragraph); font-style: normal;">reese</span>nuts</h1>
  <h1 style="font-size: large;">{currentDateTime}</h1>
  <p style="font-size: small;">Local time in Manila, Philippines</p>
  <div class="buttons" style="display: flex; gap: 10px; align-items: center; justify-content: center; margin-top: 20px; ">
      <!-- github logo -->
      <a href="https://github.com/reesenuts" target="_blank" style="text-decoration: none;">
        <button style="height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8807 21.8254V17.8571C15.0187 16.6144 14.6624 15.3672 13.8886 14.3849C16.8648 14.3849 19.841 12.4008 19.841 8.92858C19.9204 7.6885 19.5732 6.46826 18.849 5.45635C19.1267 4.31548 19.1267 3.125 18.849 1.98413C18.849 1.98413 17.8569 1.98413 15.8728 3.47223C13.2537 2.97619 10.5553 2.97619 7.93627 3.47223C5.95214 1.98413 4.96008 1.98413 4.96008 1.98413C4.66246 3.125 4.66246 4.31548 4.96008 5.45635C4.23773 6.46417 3.88713 7.69126 3.96801 8.92858C3.96801 12.4008 6.9442 14.3849 9.92039 14.3849C9.53349 14.871 9.24579 15.4266 9.07714 16.0218C8.90849 16.6171 8.85889 17.2421 8.92833 17.8571M8.92833 17.8571V21.8254M8.92833 17.8571C4.45412 19.8413 3.96801 15.873 1.98389 15.873" stroke="#F5F5F8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </a>
      <!-- qr scanner logo: i used my ig for now -->
      <a href="https://www.instagram.com/reese.nuts/" target="_blank">
        <button style="height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 13.3333H15C14.558 13.3333 14.134 13.5089 13.8215 13.8215C13.5089 14.134 13.3333 14.558 13.3333 15V17.5M17.5 17.5V17.5083M10 5.83333V8.33333C10 8.77536 9.8244 9.19928 9.51184 9.51184C9.19928 9.8244 8.77536 10 8.33333 10H5.83333M2.5 10H2.50833M10 2.5H10.0083M10 13.3333V13.3417M13.3333 10H14.1667M17.5 10V10.0083M10 17.5V16.6667M3.33333 2.5H5.83333C6.29357 2.5 6.66667 2.8731 6.66667 3.33333V5.83333C6.66667 6.29357 6.29357 6.66667 5.83333 6.66667H3.33333C2.8731 6.66667 2.5 6.29357 2.5 5.83333V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM14.1667 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V5.83333C17.5 6.29357 17.1269 6.66667 16.6667 6.66667H14.1667C13.7064 6.66667 13.3333 6.29357 13.3333 5.83333V3.33333C13.3333 2.8731 13.7064 2.5 14.1667 2.5ZM3.33333 13.3333H5.83333C6.29357 13.3333 6.66667 13.7064 6.66667 14.1667V16.6667C6.66667 17.1269 6.29357 17.5 5.83333 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V14.1667C2.5 13.7064 2.8731 13.3333 3.33333 13.3333Z" stroke="#F5F5F8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </a>
  </div>
</div>