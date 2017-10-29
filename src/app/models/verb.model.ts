export class Verb {
  id: {
      type: Number,
      required: true,
      default: 0
  };
  title: {
      type: String,
      required: true,
      default: ''
  };
  meaning: {
      type: String,
      required: true,
      default: ''
  };
  srcImg: {
      type: String,
      required: true,
      default: ''
  };
  form: {
      infinitive: {
          type: String,
          required: true,
          default: ''
      },
      simplePast: {
          type: String,
          required: true,
          default: ''
      },
      pastParticiple: {
          type: String,
          required: true,
          default: ''
      }
  };
  category: {
      type: String,
      required: true,
      default: 'infinitive'
  };
  examples: {
      type: Array<string>,
      required: true,
      default: ''
  };
}