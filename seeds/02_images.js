
exports.seed = function (knex) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert([
        {
          title: 'Paris, France',
          url: 'https://i.imgur.com/ylhXKd6.jpg',
          low_resolution_url: 'https://i.imgur.com/ylhXKd6l.jpg'
        },
        {
          title: 'Underwater Reef, Indonesia',
          url: 'https://i.imgur.com/hx9fcse.jpg',
          low_resolution_url: 'https://i.imgur.com/hx9fcsel.jpg'
        },
        {
          title: 'Macchu Picchu, Peru',
          url: 'https://i.imgur.com/D2dDvN2.jpg',
          low_resolution_url: 'https://i.imgur.com/D2dDvN2l.jpg'
        },
        {
          title: 'Milford Sound, New Zealand',
          url: 'https://i.imgur.com/At38bam.jpg',
          low_resolution_url: 'https://i.imgur.com/At38baml.jpg'
        },
        {
          title: 'Marinha Beach, Portugal',
          url: 'https://i.imgur.com/67Cqh5X.jpg',
          low_resolution_url: 'https://i.imgur.com/67Cqh5Xl.jpg'
        },
        {
          title: 'Petra, Jordan',
          url: 'https://i.imgur.com/GNxYgGF.jpg',
          low_resolution_url: 'https://i.imgur.com/GNxYgGFl.jpg'
        },
        {
          title: 'El Nido, Phillipines',
          url: 'https://i.imgur.com/Nk4VmCH.jpg',
          low_resolution_url: 'https://i.imgur.com/Nk4VmCHl.jpg'
        },
        {
          title: 'Victoria Falls, Zimbabwe',
          url: 'https://i.imgur.com/ljVH5Eo.jpg',
          low_resolution_url: 'https://i.imgur.com/ljVH5Eol.jpg'
        },
        {
          title: 'Ayutthaya, Thailand',
          url: 'https://i.imgur.com/FBR29ZM.jpg',
          low_resolution_url: 'https://i.imgur.com/FBR29ZMl.jpg'
        },
        {
          title: 'Luner Lake, Austria',
          url: 'https://i.imgur.com/CgIlbdq.jpg',
          low_resolution_url: 'https://i.imgur.com/CgIlbdql.jpg'
        },
        {
          title: 'Maroon Bells, Colorado',
          url: 'https://i.imgur.com/9h0yMjJ.jpg',
          low_resolution_url: 'https://i.imgur.com/9h0yMjJl.jpg'
        },
        {
          title: 'Queensland, Australia',
          url: 'https://i.imgur.com/tbPp7aa.jpg',
          low_resolution_url: 'https://i.imgur.com/tbPp7aal.jpg'
        },
      ]);
    });
};
