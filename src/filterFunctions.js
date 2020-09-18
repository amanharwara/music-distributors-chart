let filterFunctions = {
  showOnlyFree: {
    value: false,
    expr: (s) => s.price.value === "$0",
  },
  hasIGMusic: {
    value: false,
    expr: (s) => s.ig_music,
  },
  hasVideoDistribution: {
    value: false,
    expr: (s) => s.video_distribution.weighted_value === 1,
  },
  hasContentID: {
    value: false,
    expr: (s) => s.content_id.weighted_value === 1,
  },
};

export default filterFunctions;
