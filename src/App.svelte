<script>
  import Table from "./Table.svelte";

  let dark_mode = false;
</script>

<style>
  main {
    width: 100%;
    height: 100%;
    background: #fafafa;
    padding: 0.5rem 1rem 0;
    box-sizing: border-box;
  }

  h1 {
    color: #ff3e00;
    font-size: 2.5rem;
    font-weight: 100;
    margin: 0;
  }

  .dark_mode {
    background: #0e0e0e;
    color: #fafafa;
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
</style>

<main class:dark_mode>
  <header>
    <h1>Compare Music Distributors</h1>
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
      rel="noreferrer noopener">Ari's Take</a>.
  </p>
  <p>
    If you find something wrong with the chart, or would like to contribute to
    it, open an <a
      href="https://github.com/amanharwara/music-distributors-chart/issues"
      target="_blank"
      rel="noreferrer noopener">issue</a> on GitHub.
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
