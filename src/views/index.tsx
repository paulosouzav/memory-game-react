// It is necessary to export
// with star (*) because CRA with TS
// has an issue to find these modules
// when running tests (look for isolatedModules).
//
// Once this issue is fixed, use the following instead:
//
// export { Game } from './Game';

export * from './Game';
