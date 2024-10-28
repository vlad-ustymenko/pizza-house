export const categories = [
  { name: 'Піци' },
  { name: 'Комбо' },
  { name: 'Закуски' },
  { name: 'Сніданки' },
  { name: 'Коктейлі' },
  { name: 'Кава' },
  { name: 'Напої' },
  { name: 'Десерти' },
]

export const ingredients = [
  {
    name: 'Сирний бортик',
    price: 20,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Моцарелла',
    price: 10,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сири Чедер та Пармезан',
    price: 10,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Халапеньо',
    price: 7,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Ніжне курча',
    price: 10,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Печериці',
    price: 10,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Бекон',
    price: 15,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Шинка',
    price: 15,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пікантна пепероні',
    price: 15,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Гостра чорізо',
    price: 10,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Мариновані огірочки',
    price: 5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свіжі томати',
    price: 5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Червона цибуля',
    price: 5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Соковиті ананаси',
    price: 7,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Італійські трави',
    price: 5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Солодкий перець',
    price: 5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики бринзи',
    price: 7,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Мітболи',
    price: 15,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
  {
    name: 'Омлет з шинкою та грибами',
    searchQuery: 'омлет з шинкою та грибами',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.jpg',
    categoryId: 2,
  },
  {
    name: 'Омлет сирний',
    searchQuery: 'омлет сирний',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE797033873EB1B4B77F7E70BBA37E.avif',
    categoryId: 4,
  },
  {
    name: 'Кава Латте',
    searchQuery: 'кава латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 6,
  },
  {
    name: 'Паніні шинка та сир',
    searchQuery: 'паніні шинка та сир',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
    categoryId: 3,
  },
  {
    name: 'Курячі нагетси',
    searchQuery: 'курячі нагетси',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif',
    categoryId: 3,
  },
  {
    name: 'Картопля з печі з соусом 🌱👶',
    searchQuery: 'картопля з печі з соусом',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.avif',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    searchQuery: 'додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.avif',
    categoryId: 3,
  },
  {
    name: 'Гострий Додстер 🌶🌶',
    searchQuery: 'гострий додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.avif',
    categoryId: 3,
  },
  {
    name: 'Молочний коктейль Ожина-малина',
    searchQuery: 'молочний коктейль ожина малина',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EEB92C801211CBAF91BB30F77568C5.avif',
    categoryId: 5,
  },
  {
    name: 'Класичний молочний коктейль',
    searchQuery: 'класичний молочний коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.avif',
    categoryId: 5,
  },
  {
    name: 'Молочний коктейль із печивом Орео',
    searchQuery: 'молочний коктейль із печивом орео',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.avif',
    categoryId: 5,
  },
  {
    name: 'Молочний коктейль Піна Колада',
    searchQuery: 'молочний коктейль піна колада',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
    categoryId: 5,
  },
  {
    name: 'Ірландський Капучіно',
    searchQuery: 'ірландський капучіно',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.avif',
    categoryId: 6,
  },
  {
    name: 'Кава Карамельне капучіно',
    searchQuery: 'кава карамельне капучіно',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
    categoryId: 6,
  },
  {
    name: 'Кава Кокосове латте',
    searchQuery: 'кава кокосове латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.avif',
    categoryId: 6,
  },
  {
    name: 'Кава Американо',
    searchQuery: 'кава американо',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.avif',
    categoryId: 6,
  },
  {
    name: 'Кава Капучіно',
    searchQuery: 'кава капучіно',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61AE1813B4AB42D8927D061035.avif',
    categoryId: 6,
  },
]
