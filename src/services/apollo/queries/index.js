import { gql } from 'apollo-boost';

// Locations
export const LOCATIONS_QUERY = gql`
  query getLocations(
    $recycleBy: [TypeRecycling]
    $category: TypeLocationCategory
    $district: TypeDistrict
  ) {
    getLocations(recycleBy: $recycleBy, category: $category, district: $district) {
      id
      name
      lat
      lng
      category
      district
      address
      opening
      tel
    }
  }
`;

export const LINKS_QUERY = gql`
  query getLinks {
    getLinks {
      id
      title__en
      title__zh
      url
      content__en
      content__zh
      imageUrl
      category
    }
  }
`;

export const LOCATION_QUERY = gql`
  query getLocation($id: ID) {
    getLocation(id: $id) {
      id
      name
      content__en
      content__zh
      address
      imageUrl
      webUrl
      lat
      lng
      tel
      opening
      facebook
      recycleBy
      category
      district
    }
  }
`;

export const NEWS_QUERY = gql`
  query getNewsInfo {
    getNewsInfo {
      author
      title
      description
      publishedAt
      urlToImage
      url
      source {
        name
      }
    }
  }
`;

export const EVENTS_QUERY = gql`
  query getEvents {
    getEvents {
      id
      title
      date
      imageUrl
      category
      content__zh
      content__en
    }
  }
`;

export const EVENT_QUERY = gql`
  query getEvent($id: ID) {
    getEvent(id: $id) {
      id
      title
      place
      content__zh
      content__en
      date
      imageUrl
      webUrl
      lat
      lng
      date
      email
      category
      facebook
      recomendations
    }
  }
`;

export const SHOPS_QUERY = gql`
  query getShops {
    getShops {
      id
      name
      address
      phone
      email
      webUrl
      facebook
      instagram
      promoded
      imageUrl
      thumbnail
      description
      rate
      plasticfree
      category
    }
  }
`;

export const SHOP_QUERY = gql`
  query getShop($id: ID) {
    getShop(id: $id) {
      id
      name
      address
      email
      webUrl
      facebook
      lng
      lat
      promoded
      imageUrl
      thumbnail
      description
      rate
      plasticfree
      category
    }
  }
`;

export const ADVICES_QUERY = gql`
  query getAdvices {
    getAdvices {
      id
      title__en
      title__zh
      statement__en
      statement__zh
      author
      imageUrlWhat
      authorWhat
      linkWhat
      date
    }
  }
`;

export const ADVICE_QUERY = gql`
  query getAdvice($id: ID) {
    getAdvice(id: $id) {
      id
      title__en
      title__zh
      statement__en
      statement__zh
      author
      contentWhy__en {
        html
        text
      }
      contentWhy__zh {
        html
        text
      }
      contentWhat__en {
        html
        text
      }
      contentWhat__zh {
        html
        text
      }
      contentHow__en {
        html
        text
      }
      contentHow__zh {
        html
        text
      }
      imageUrlWhy
      authorWhy
      linkWhy
      imageUrlWhat
      authorWhat
      linkWhat
      date
      products {
        id
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query getProducts($category: TypeProduct) {
    getProducts(category: $category) {
      id
      name__en
      name__zh
      price
      link
      newness
      imageUrl
      description__en
      description__zh
      brand
      category
    }
  }
`;
