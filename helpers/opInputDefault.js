module.exports = input => {
  if (input.array) return input.array.default;
  if (input.boolean) return input.boolean.default;
  if (input.dir) return input.dir.default;
  if (input.file) return input.file.default;
  if (input.number) return input.number.default;
  if (input.object) return input.object.default;
  if (input.socket) return input.socket.default;
  if (input.string) return input.string.default;
}