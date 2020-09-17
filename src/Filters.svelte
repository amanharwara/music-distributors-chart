<script>
</script>

<style>
  .filters {
    margin: 0.5rem 0;
    display: inline-flex;
    flex-wrap: wrap;
  }
  .filter {
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
  .filter input {
    margin: 0;
    margin-right: 0.45rem;
  }

  @media screen and (min-width: 1370px) {
    .filters {
      margin: 0.75vw 0;
    }
    .filter input {
      width: 1vw;
      height: 1vw;
      margin-right: 0.5vw;
    }
  }
</style>

<div class="filters">
  <label class="filter">
    <input type="checkbox" id="showOnlyFree" on:click /> Show Only Free Distributors
  </label>
  <label class="filter">
    <input type="checkbox" id="hasIGMusic" on:click /> Has IG Music
  </label>
  <label class="filter">
    <input type="checkbox" id="hasVideoDistribution" on:click /> Has Video Distribution
  </label>
  <label class="filter">
    <input type="checkbox" id="hasContentID" on:click /> Has Content ID
  </label>
</div>
