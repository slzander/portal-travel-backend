
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {title: 'Milford Sound, New Zealand',
          url: 'https://i.imgur.com/At38bam.jpg'},
        {title: 'Macchu Picchu, Peru',
          url: 'https://i.imgur.com/D2dDvN2.jpg'},
        {title: 'Marinha Beach, Portugal',
          url: 'https://i.imgur.com/67Cqh5X.jpg'},
        {title: 'Paris, France',
          url: 'https://i.imgur.com/ylhXKd6.jpg'},
        {title: 'Petra, Jordan',
          url: 'https://i.imgur.com/GNxYgGF.jpg'},
        {title: 'Underwater Reef, Indonesia',
          url: 'https://i.imgur.com/hx9fcse.jpg'},
        {title: 'El Nido, Phillipines',
          url: 'https://imgur.com/Nk4VmCH'},
        {title: 'Victoria Falls, Zimbabwe',
          url: 'https://i.imgur.com/ljVH5Eo.jpg'},
        {title: 'Ayutthaya, Thailand',
          url: 'https://imgur.com/FBR29ZM'},
        {title: 'Luner Lake, Austria',
          url: 'https://i.imgur.com/CgIlbdq.jpg'},
        {title: 'Andringitra, Madagascar',
          url: 'https://i.imgur.com/n5RZLjF.jpg'},
      ]);
    });
};
