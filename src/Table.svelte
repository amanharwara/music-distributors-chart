<script>
  import original_chartdata from "./chartdata";
  import Filters from "./Filters.svelte";
  import chartdata from "./chartdata";
  import filterFunctions from "./filterFunctions";
  export let dark = false;

  let sortable_chartdata = original_chartdata;

  let search_value;

  const handleFilterClick = (e) => {
    if (e.target.id) {
      let id = e.target.id;
      filterFunctions[id].value = e.target.checked;
    }
  };

  $: {
    let filtered_chartdata = original_chartdata.filter((service) => {
      return search_value && search_value.length > 0
        ? JSON.stringify(service)
            .toLowerCase()
            .includes(search_value.toLowerCase())
        : true;
    });
    for (let key in filterFunctions) {
      let filter = filterFunctions[key];
      if (filter.value) {
        filtered_chartdata = filtered_chartdata.filter((s) => filter.expr(s));
      }
    }
    sortable_chartdata = filtered_chartdata;
  }

  let current_sort_id;
  let descending = false;

  const sort = (prev, next) => {
    if (prev > next) {
      return -1;
    } else if (prev < next) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleSortClick = (e) => {
    if (e.target.closest("th")) {
      let id = e.target.closest("th").id;
      if (current_sort_id === id) {
        descending = !descending;
      } else {
        current_sort_id = id;
      }
    }
  };

  let descending_element = document.createElement("span");
  descending_element.className = "descending";
  descending_element.textContent = "▲";

  let ascending_element = document.createElement("span");
  ascending_element.className = "ascending";
  ascending_element.textContent = "▼";

  const clearSortIcons = () => {
    if (document.querySelector(".descending")) {
      document.querySelector(".descending").remove();
    }

    if (document.querySelector(".ascending")) {
      document.querySelector(".ascending").remove();
    }
  };

  $: {
    clearSortIcons();

    if (current_sort_id) {
      let sorted = sortable_chartdata.sort((prev, next) => {
        prev = prev[current_sort_id];
        next = next[current_sort_id];

        if (prev.weighted_value !== undefined) prev = prev.weighted_value;
        if (next.weighted_value !== undefined) next = next.weighted_value;

        return sort(prev, next);
      });

      if (descending) {
        sortable_chartdata = sorted.reverse();
        document
          .getElementById(current_sort_id)
          .appendChild(descending_element);
      } else {
        sortable_chartdata = sorted;
        document.getElementById(current_sort_id).appendChild(ascending_element);
      }
    }
  }
</script>

<style>
  table {
    border: 1px solid #a1a1a1;
    display: table;
    border-collapse: collapse;
  }
  a {
    color: #fff;
  }
  td,
  th {
    text-align: center;
    padding: 0.35rem 0.1rem;
    border-right: 1px solid rgba(161, 161, 161, 0.5);
  }
  th {
    background: #0c0c0c;
    color: #fff;
    font-weight: 700;
    padding: 0.35rem;
    user-select: none;
  }
  td:last-child,
  th:last-child {
    border-right: 0;
  }
  .name {
    background: #313131;
    color: #fff;
    padding: 0.25rem 0.5rem;
    height: 100%;
    display: table-cell;
  }
  .price,
  .make_changes {
    display: table-cell;
    padding: 0.25rem 0.5rem;
  }
  tr,
  thead {
    border-bottom: 1px solid rgba(161, 161, 161, 0.5);
  }
  tr:last-child {
    border-bottom: 0;
  }
  input[type="text"] {
    width: 100%;
  }
  tr:nth-child(2n) {
    background: #e7e7e7;
  }
  table.dark_mode {
    border: 1px solid rgba(161, 161, 161, 0.5);
  }
  .dark_mode th {
    background: #1a1a1a;
  }
  .dark_mode td,
  .dark_mode th {
    border-right: 1px solid rgba(161, 161, 161, 0.25);
  }
  .dark_mode tr,
  .dark_mode thead {
    border-bottom: 1px solid rgba(161, 161, 161, 0.25);
  }
  .dark_mode tr:nth-child(2n) {
    background: #141414;
  }
  #search {
    padding: 0.35rem 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  #search.dark_mode {
    background: #141414;
    color: #fafafa;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1370px) {
    #search {
      padding: 0.5vw;
      font-size: 1vw;
    }
    td,
    th {
      padding: 0.45vw;
    }
  }

  @media screen and (max-width: 768px) {
    table {
      overflow: hidden;
      max-width: 100%;
      box-sizing: border-box;
    }
  }
</style>

<label>
  Search: <input id="search" type="text" bind:value={search_value} class:dark_mode={dark} />
</label>
<Filters on:click={handleFilterClick} />
<table class:dark_mode={dark}>
  <thead on:click={handleSortClick}>
    <th id="name">Name</th>
    <th id="price">Price</th>
    <th id="commission">Commission</th>
    <th id="stores">No. of Stores</th>
    <th id="video_distribution">Video Distribution</th>
    <th id="content_id">Content ID</th>
    <th id="ig_music">IG Music</th>
    <th id="payout_minimum">Minimum Payout Threshold</th>
    <th id="make_changes_after_distribution">
      Make Changes After Distribution
    </th>
    <th id="extra_tools">Extra Tools</th>
  </thead>
  <tbody>
    {#each sortable_chartdata as service (service.name)}
      <tr>
        <td class="name">
          <a
            target="_blank"
            href={service.url}
            rel="noreferrer noopener">{service.name}</a>
        </td>
        <td class="price" title="Price/Cost">
          {@html service.price.value.replaceAll(/\n/g, '<br />')}
        </td>
        <td title="Commission">
          {@html service.commission.value.replaceAll(/\n/g, '<br />')}
        </td>
        <td title="Number of Stores">{service.stores}</td>
        <td title="Music Video Distribution">
          {#if service.video_distribution.value === true}
            {'✅'}
          {:else if service.video_distribution.value}
            {@html service.video_distribution.value.replaceAll(/\n/g, '<br />')}
          {:else}{'❌'}{/if}
        </td>
        <td title="YouTube Content ID">
          {#if service.content_id.value === true}
            {'✅'}
          {:else if service.content_id.value}
            {service.content_id.value}
          {:else}{'❌'}{/if}
        </td>
        <td title="Facebook/Instagram Music">
          {service.ig_music ? '✅' : '❌'}
        </td>
        <td title="Minimum Payment Threshold">${service.payout_minimum}</td>
        <td class="make_changes">
          {#if service.make_changes_after_distribution.value === true}
            {'✅'}
          {:else if service.make_changes_after_distribution.value}
            {service.make_changes_after_distribution.value}
          {:else}{'❌'}{/if}
        </td>
        <td>
          {#if service.extra_tools.value === true}
            {'✅'}
          {:else if service.extra_tools.value}
            {service.extra_tools.value}
          {:else}{'❌'}{/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
