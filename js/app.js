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

const etage = [{
  id: 'etage-ch1',
  title: 'Chambre 1',
  panorama: 'PANO_20180128_125521.jpg',
}, {
  id: 'etage-ch2',
  title: 'Chambre 2',
  panorama: 'PANO_20180128_125129.jpg',
}, {
  id: 'etage-sdb-ch3',
  title: 'Salle de bain + Chambre 3',
  panorama: 'PANO_20180128_124559.jpg',
}];

const defaultOptions = {
  type: 'equirectangular',
  autoLoad: true,
};

rdc.concat(etage).forEach(({ id, title, panorama }) => {
  pannellum.viewer(id, Object.assign({
    panorama: `images/${panorama}`,
    title
  }, defaultOptions));
});
