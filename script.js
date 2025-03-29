try {
  const encodedMessage = new TextEncoder().encode(
    "b641ad42-428a-42de-9e70-ce20975965c5"
  );
  const signature = provider.signMessage(
    encodedMessage,
    "bc1q5fnvj5qf9u6k7z7z7sfc6q7whrjlq85r6u6un6"
  );
  console.log(signature);
} catch (error) {
  throw new Error(
    error instanceof Error ? error.message : "Failed to sign message"
  );
}
