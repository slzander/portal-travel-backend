
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {title: 'Milford Sound',
          url: 'https://i.imgur.com/At38bam.jpg'},
        {title: 'Macchu Picchu',
          url: 'https://i.imgur.com/D2dDvN2.jpg'},
        {title: 'ShangriLa',
          url: 'https://video.360cities.net/littleplanet-360-imagery/01587664_ShangriLa-360-8K-h265-60Mbps-1024x512.jpg'},
        {title: 'Statue of Liberty',
          url: 'https://video.360cities.net/digitalstudio/01622412_Liberty2018-1024x512.jpg'},
        {title: 'Boat dock',
          url: 'https://www.pinnaclesys.com/static/pin/images/landing/360video/screens/360-equirectangular.jpg'},
        {title: 'Ocean view',
          url: 'https://images.squarespace-cdn.com/content/v1/5568ec94e4b06c17240d5220/1443508568279-5KM5IBNCU4HDIQGMTCC3/ke17ZwdGBToddI8pDm48kBpzt4_K496Ao-aLooMTCTp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0plef_PmwB6-3GP4qDbCUv9cfxFbOETjyuzxeVcrr-Ci5fj66QIwtSm7rXFpMnU6ig/Homepage+LEI.jpg?format=2500w'},
        {title: 'Milan',
          url: 'https://www.360visio.com/wp-content/uploads/v2/20b-Milano360/20g-1-ParchiGiardini/MI-f1PcoSempioneTorreBranca/1330409-MI-PcoSempioneTorreBranca-rX2j-T.jpg'},
        {title: 'Museum',
          url: 'https://www.360visio.com/wp-content/uploads/v2/43-Tecnica360/0-InfoTecnica-FotoTestataStatica2014-versailles/DSC08118-FR-Versailles-BataillesRivoli-T.jpg'},
      ]);
    });
};
