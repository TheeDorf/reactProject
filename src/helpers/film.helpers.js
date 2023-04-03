export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director === director);
  else return list;
}

export function getListOf(list, prop) {
  return list.reduce((uniqueValue, item) => {
    if (uniqueValue.indexOf(item[prop]) === -1) {
      uniqueValue.push(item[prop]);
    }
    return uniqueValue;
  }, []);
}

// export function getListOf(list,prop){
//     return [...new Set(list.map((film)=>film[prop] || ""))];
// };

export function getFilmStats(list) {
  return list.reduce(
    (stats, film) => {
      stats.total++;
      stats.acc_score += Number(film.rt_score);
      stats.avg_score = stats.acc_score / stats.total;
      if (stats.latest == null || stats.latest < film.release_data) {
        stats.latest = film.release_date;
        
    }return stats
    
    },
    {
      total: 0,
      acc_score: 0,
      avg_score: 0,
      latest: null,
    }
  );
}
