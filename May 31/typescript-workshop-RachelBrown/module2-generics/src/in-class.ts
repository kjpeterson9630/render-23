export interface CatalogItem {
  id: string;
  url: string;
  metadata: Record<string, string>;
}

export interface Artist extends CatalogItem {
  name: string;
}

export interface Album extends CatalogItem {
  name: string;
  trackCount: number;
}

export interface Song extends CatalogItem {
  name: string;
  duration: number;
}

let someArtist: Artist = {
  id: "",
  url: "",
  metadata: {},
  name: "",
};

// type this function - it takes in an artbitrary item that's a CatalogItem, and it returns an array of (in theory)
// similar items of the same type (though for now we're just hard coding the same item).
function getSimilarItems1(item: unknown): unknown {
  return [item, item, item];
}

function getSimilarItems2<T extends CatalogItem>(item: T): T[] { //THIS IS THE ANSWER from line 28
  return [item, item, item];
}

const result1 = getSimilarItems1(someArtist);
const result2 = getSimilarItems2(someArtist);

// x should be Promise<Artist[]>
