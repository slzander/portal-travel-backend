
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          title: 'Paris, France',
          url: 'https://i.imgur.com/ylhXKd6.jpg'
        },
        {
          title: 'Underwater Reef, Indonesia',
          url: 'https://i.imgur.com/hx9fcse.jpg'
        },
        {
          title: 'Macchu Picchu, Peru',
          url: 'https://i.imgur.com/D2dDvN2.jpg'
        },
        {
          title: 'Milford Sound, New Zealand',
          url: 'https://i.imgur.com/At38bam.jpg'
        },
        {
          title: 'Marinha Beach, Portugal',
          url: 'https://i.imgur.com/67Cqh5X.jpg'
        },
        {
          title: 'Petra, Jordan',
          url: 'https://i.imgur.com/GNxYgGF.jpg'
        },
        {
          title: 'El Nido, Phillipines',
          url: 'https://i.imgur.com/Nk4VmCH.jpg'
        },
        {
          title: 'Victoria Falls, Zimbabwe',
          url: 'https://i.imgur.com/ljVH5Eo.jpg'
        },
        {
          title: 'Ayutthaya, Thailand',
          url: 'https://i.imgur.com/FBR29ZM.jpg'
        },
        {
          title: 'Luner Lake, Austria',
          url: 'https://i.imgur.com/CgIlbdq.jpg'
        },
        {
          title: 'Maroon Bells, Colorado',
          url: 'https://i.imgur.com/9h0yMjJ.jpg'
        },
        {
          title: 'Queensland, Australia',
          url: 'https://i.imgur.com/tbPp7aa.jpg'
        },
      ]);
    });
};
