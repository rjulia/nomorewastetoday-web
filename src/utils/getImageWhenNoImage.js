export function getImage(category) {
  switch (true) {
    case category === 'COMMUNITY':
      return {
        img: require('../assets/images/no-image-points.jpg'),
        author: 'Photo by Juanjo Menta from Pexels',
        link:
          'https://www.pexels.com/@juanjomenta?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',
      };
    case category === 'WASTE_SEPARATION':
      return {
        img: require('../assets/images/no-image-waste.jpg'),
        author: 'Photo by Paweł Czerwiński on Unsplash',
        link:
          'https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      };
    case category === 'ORGANIZATIONS':
      return {
        img: require('../assets/images/no-image-organization.jpg'),
        author: 'Photo by Juanjo Menta from Pexels',
        link:
          'https://www.pexels.com/@juanjomenta?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',
      };
    case category === 'CLOTHES':
      return {
        img: require('../assets/images/no-image-clothes.jpg'),
        author: 'Photo by Juanjo Menta from Pexels',
        link:
          'https://www.pexels.com/@juanjomenta?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',
      };
    case category === 'COLLECTOR':
      return {
        img: require('../assets/images/no-image-collector2.jpg'),
        author: 'Photo by Mitchell Luo on Unsplash',
        link:
          'https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      };
    default:
      break;
  }
}
