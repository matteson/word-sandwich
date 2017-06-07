
acceptable = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
iter = 1

with open('words.txt') as wordSource:
  with open('wordsCleaned.txt', 'w') as wordDest:
    word = wordSource.readline().strip()
    while word:
      if set(word) <= acceptable and (not word.isupper()):
        wordDest.write(word)
        wordDest.write('\n')

      word = wordSource.readline().strip()
      iter += 1

      if iter % 100000 == 0:
        print(iter)

with open('wordsCleaned.txt') as wordSource:
  with open('words-3.ts', 'w') as wordDest:
    wordDest.write('export const words3 = [\n')

    word = wordSource.readline().strip()
    while word:
      if len(word) == 3:
        wordDest.write("'")
        wordDest.write(word)
        wordDest.write("',")
        wordDest.write('\n')

      word = wordSource.readline().strip()
      iter += 1

      if iter % 100000 == 0:
        print(iter)

    wordDest.write('];')

