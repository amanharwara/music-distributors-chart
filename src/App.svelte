<script>
  import Table from "./Table.svelte";

  let dark_mode = false;

  if (localStorage) {
    dark_mode = JSON.parse(localStorage.getItem("dark_mode"));
  }

  $: {
    localStorage.setItem("dark_mode", dark_mode);

    if (dark_mode) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
  }
</script>

<style>
  main {
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  h1 {
    color: #0084ff;
    font-size: 2.5rem;
    font-weight: 100;
    margin: 0;
  }

  button {
    padding: 0.25rem;
    font-size: 1.1rem;
    cursor: pointer;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :global(.dark_mode h1) {
    color: #00ccff;
  }

  @media screen and (min-width: 1370px) {
    h1 {
      font-size: 3vw;
    }
    button {
      padding: 0.5rem;
      font-size: 1.5vw;
    }
    main {
      padding: 1vw;
      font-size: 1.2vw;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      overflow: auto;
      max-width: 100%;
      box-sizing: border-box;
    }
  }
</style>

<main>
  <header>
    <h1>Compare Digital Music Distributors</h1>
    <button class="toggle_dark_mode" on:click={() => (dark_mode = !dark_mode)}>
      {#if dark_mode}🌞{:else}🌙{/if}
    </button>
  </header>
  <p>
    Original chart data from <a
      href="https://reddit.com/u/justkarmo"
      target="_blank"
      rel="noreferrer noopener">/u/JustKarmo</a> on Reddit and <a
      href="https://aristake.com/cd-baby-tunecore-ditto-mondotunes-zimbalam-or/"
      target="_blank"
      rel="noreferrer noopener">Ari's Take</a>. <br /> If you find something wrong
    with the chart, or would like to contribute to it, open an <a
      href="https://github.com/amanharwara/music-distributors-chart/issues"
      target="_blank"
      rel="noreferrer noopener">issue</a> on GitHub. <br /> The table can be sorted
    according to any of the attributes by clicking on the heading, e.g "Commission".
  </p>
  <Table dark={dark_mode} />
  <footer>
    <p>
      Made by <a
        href="https://github.com/amanharwara"
        target="_blank"
        rel="noreferrer noopener">Aman Harwara</a>. Source code available at the <a
        href="https://github.com/amanharwara/music-distributors-chart/">GitHub
        repository</a> under the AGPL-3.0 license.
    </p>
  </footer>
</main>
