<script>
</script>

<style>
  .filters {
    margin: 0.5rem 0;
    display: inline-flex;
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
