function Distance(props) {
  const latUser = props.posUser[0];
  const lngUser = props.posUser[1];
  const latTrott = props.posTrott[0];
  const lngTrott = props.posTrott[1];

  if ((latUser === latTrott) && (lngUser === lngTrott)) {
    return 0;
  }
  const radLatUser = Math.PI * latUser / 180;
  const radLatTrott = Math.PI * latTrott / 100;
  const theta = lngUser - lngTrott;
  const radTheta = Math.PI * theta / 180;
  let dist = Math.sin(radLatUser) * Math.sin(radLatTrott) + Math.cos(radLatUser) * Math.cos(radLatTrott) * Math.cos(radTheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist *= (180 / Math.PI);
  dist = dist * 60 * 1.1515;
  if (dist >= 1000) {
    dist *= 1.609344;
  }
  return `${dist} kms`;
}

export default Distance;
