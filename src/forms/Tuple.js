import t from "tcomb-form";

const AssetSchema = t.struct({
  tokenId: t.String,
  price: t.Number,
});

const TupleSchema = t.struct({
  baseUrl: t.String,
  royalty: t.Number,

  assets: t.list(AssetSchema),
});

const TupleOptions = {
  fields: {
    baseUrl: {
      label: "Meta Base Url",
    },
  },
};

export { TupleSchema, TupleOptions };
