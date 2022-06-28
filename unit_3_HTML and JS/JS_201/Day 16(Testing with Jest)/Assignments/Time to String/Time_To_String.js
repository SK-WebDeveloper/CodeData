let func = (time) => {

   if (time < (1000 * 60)) {

      let sec = Math.floor(time / 1000);

      if (sec == 0) return `${sec.toString()} second`;
      else if (sec == 1) return `${sec.toString()} second`;
      else if (sec >= 2) return `${sec.toString()} seconds`;

   } else if (time >= (1000 * 60) && time < (1000 * 60 * 60)) {

      let min = time / (1000 * 60);
      let rem = time % (1000 * 60);

      let sec;

      if (rem >= 1000) sec = Math.floor(rem / 1000);

      if (Math.floor(min) == 1 && rem < 1000) return `${Math.floor(min).toString()} minute`;
      else if (Math.floor(min) >= 2 && rem < 1000) return `${Math.floor(min).toString()} minutes`;
      else if (Math.floor(min) == 1 && sec == 1) return `${Math.floor(min).toString()} minute ${sec} second`;
      else if (Math.floor(min) == 1 && sec >= 2) return `${Math.floor(min).toString()} minute ${sec} seconds`;
      else if (Math.floor(min) >= 2 && sec == 1) return `${Math.floor(min).toString()} minutes ${sec} second`;
      else if (Math.floor(min) >= 2 && sec >= 2) return `${Math.floor(min).toString()} minutes ${sec} seconds`;

   } else {

      let hrs = time / (1000 * 60 * 60);
      let rem = time % (1000 * 60 * 60);

      let min, rem1, sec;

      if (rem >= (1000 * 60)) {

         min = rem / (1000 * 60);
         rem1 = rem % (1000 * 60);

         if (rem1 >= 1000) sec = Math.floor(rem1 / 1000);

      } else if (rem < (1000 * 60) && rem >= 1000) sec = Math.floor(rem / 1000);

      if (Math.floor(hrs) == 1 && rem < 1000) return `${Math.floor(hrs).toString()} hour`;
      else if (Math.floor(hrs) >= 2 && rem < 1000) return `${Math.floor(hrs).toString()} hours`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) == 1 && rem1 < 1000) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minute`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) >= 2 && rem1 < 1000) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minutes`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) == 1 && rem1 < 1000) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minute`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) >= 2 && rem1 < 1000) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minutes`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) == 1 && sec == 1) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minute ${sec.toString()} second`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) == 1 && sec >= 2) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minute ${sec.toString()} seconds`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) >= 2 && sec == 1) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minutes ${sec.toString()} second`;
      else if (Math.floor(hrs) == 1 && Math.floor(min) >= 2 && sec >= 2) return `${Math.floor(hrs).toString()} hour ${Math.floor(min).toString()} minutes ${sec.toString()} seconds`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) == 1 && sec == 1) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minute ${sec.toString()} second`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) == 1 && sec >= 2) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minute ${sec.toString()} seconds`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) >= 2 && sec == 1) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minutes ${sec.toString()} second`;
      else if (Math.floor(hrs) >= 2 && Math.floor(min) >= 2 && sec >= 2) return `${Math.floor(hrs).toString()} hours ${Math.floor(min).toString()} minutes ${sec.toString()} seconds`;
      else if (Math.floor(hrs) == 1 && sec == 1) return `${Math.floor(hrs)} hour ${sec.toString()} second`;
      else if (Math.floor(hrs) == 1 && sec >= 2) return `${Math.floor(hrs)} hour ${sec.toString()} seconds`;
      else if (Math.floor(hrs) >= 2 && sec == 1) return `${Math.floor(hrs)} hours ${sec.toString()} second`;
      else if (Math.floor(hrs) >= 2 && sec >= 2) return `${Math.floor(hrs)} hours ${sec.toString()} seconds`;

   }

}

export default func;