import * as folio from "folio";

folio.setConfig({ testDir: __dirname, timeout: 20000 });

export const test = folio.test;
export const expect = folio.expect;

test.runWith({ retries: 3 });
