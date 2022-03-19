import t from "tcomb-form";

const AssetProperty = t.struct({
  trait_type: t.String,
  value: t.String,
});

const AssetSchema = t.struct({
  name: t.String,
  description: t.String,

  price: t.Number,

  properties: t.list(AssetProperty),
});

const CreateSchema = t.struct({
  // Collection Address
  address: t.String,
  royalty: t.Number,

  assets: t.list(AssetSchema),
});

const CreateOptions = {
  fields: {
    address: {
      label: "Collection Address",
    },
  },
};

export { CreateSchema, CreateOptions };
