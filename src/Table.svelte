<script>
  import chartdata from "./chartdata";

  let search_value;

  let sortable_chartdata = chartdata;

  $: {
    sortable_chartdata = chartdata.filter((service) =>
      search_value && search_value.length > 0
        ? service.name.includes(search_value)
        : true
    );
  }
</script>

<style>
  td {
    text-align: center;
  }
  input[type="text"] {
    width: 100%;
  }
</style>

<input type="text" placeholder="Search..." bind:value={search_value} />
<table>
  <thead>
    <th>Name</th>
    <th>Royalties You Keep</th>
    <th>No. of Stores</th>
    <th>Video Distribution</th>
    <th>Content ID</th>
    <th>Instagram Music</th>
    <th>Minimum Amount For Payout</th>
    <th>Soundcloud Monetization</th>
    <th>Average Approval Time</th>
    <th>Make Changes After Distribution</th>
    <th>Marketing Tools</th>
  </thead>
  <tbody>
    {#each sortable_chartdata as service (service.name)}
      <tr>
        <td>{service.name}</td>
        <td>{service.royalties}%</td>
        <td>{service.stores}</td>
        <td>{service.video_distribution.value ? '✅' : '❌'}</td>
        <td>{service.content_id ? '✅' : '❌'}</td>
        <td>{service.ig_music ? '✅' : '❌'}</td>
        <td>${service.payout_minimum}</td>
        <td>{service.soundcloud_monetization ? '✅' : '❌'}</td>
        <td>{service.avg_approval_time}</td>
        <td>{service.make_changes_after_distribution.value ? '✅' : '❌'}</td>
        <td>{service.marketing_tools.value ? '✅' : '❌'}</td>
      </tr>
    {/each}
  </tbody>
</table>
