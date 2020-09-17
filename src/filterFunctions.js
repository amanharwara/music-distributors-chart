let filterFunctions = {
  showOnlyFree: {
    value: false,
    expr: (s) => s.distribution_cost.value === "$0",
  },
  hasIGMusic: {
    value: false,
    expr: (s) => s.ig_music,
  },
  hasVideoDistribution: {
    value: false,
    expr: (s) => s.video_distribution.value,
  },
  hasContentID: {
    value: false,
    expr: (s) => s.content_id,
  },
};

export default filterFunctions;
