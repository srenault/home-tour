const rdc = [{
  id: 'rdc-salon',
  title: 'Salon',
  panorama: 'PANO_20180124_122053.jpg',
}, {
  id: 'rdc-sejour',
  title: 'Séjour',
  panorama: 'PANO_20180124_122628.jpg',
}, {
  id: 'rdc-sdb',
  title: 'Salle de bain',
  panorama: 'PANO_20180124_123008.jpg',
}, {
  id: 'rdc-cuisine',
  title: 'Cuisine',
  panorama: 'PANO_20180124_123738.jpg',
}, {
  id: 'rdc-chambre',
  title: 'Chambre',
  panorama: 'PANO_20180124_131634.jpg',
}];

const defaultOptions = {
  type: 'equirectangular',
  autoLoad: true,
};

rdc.forEach(({ id, title, panorama }) => {
  pannellum.viewer(id, Object.assign({
    panorama: `images/${panorama}`,
    title
  }, defaultOptions));
});
