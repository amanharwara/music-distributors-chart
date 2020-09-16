<script>
  import Table from "./Table.svelte";
  import Filters from "./Filters.svelte";
</script>

<style>
  main {
    padding: 0 1em;
  }

  h1 {
    color: #ff3e00;
    font-size: 3.75em;
    font-weight: 100;
    margin: 0;
  }
</style>

<main>
  <header>
    <h1>Compare Music Distributors</h1>
    <p>
      Original chart data from <a
        href="https://reddit.com/u/justkarmo"
        target="_blank"
        rel="noreferrer noopener">/u/JustKarmo</a> on Reddit.
    </p>
    <p>
      If you find something wrong with the chart, or would like to contribute to
      it, open an <a
        href="https://github.com/amanharwara/music-distributors-chart/issues"
        target="_blank"
        rel="noreferrer noopener">issue</a> on GitHub.
    </p>
  </header>
  <Filters />
  <Table />
</main>
