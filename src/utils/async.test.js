const callbackData = cb => {
  return cb("peanut butter");
};

const asyncData = async () => {
  return "peanut butter";
};

const throwData = async () => {
  throw "error";
  return "peanut butter";
};

/////////////////////////////////////////////////
// Tests

test("the data is peanut butter", done => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }

  callbackData(callback);
});

test("the data is still peanut butter", () => {
  return asyncData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", () => {
  return throwData().catch(e => expect(e).toMatch("error"));
});

test("the data resolves to peanut butter", () => {
  return expect(asyncData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(throwData()).rejects.toMatch("error");
});

test("the async data is peanut butter", async () => {
  const data = await asyncData();
  expect(data).toBe("peanut butter");
});

test("the async fetch fails with an error", async () => {
  try {
    await throwData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(asyncData()).resolves.toBe("peanut butter");
});
