
exports.seed = function(knex) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert([
        {title: 'ShangriLa',
          url: 'https://video.360cities.net/littleplanet-360-imagery/01587664_ShangriLa-360-8K-h265-60Mbps-1024x512.jpg' },
        {title: 'Statue of Liberty',
          url: 'https://video.360cities.net/digitalstudio/01622412_Liberty2018-1024x512.jpg' },
        {title: 'Boat dock',
          url: 'https://www.pinnaclesys.com/static/pin/images/landing/360video/screens/360-equirectangular.jpg' }
      ]);
    });
};
