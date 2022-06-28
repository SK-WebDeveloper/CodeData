import func from './Time_To_String';

test('converting time into a string', () => {

   // func(time)
   // time --> give in milliseconds (1 sec = 1000 milliseconds)

   expect(func(1400)).toBe('1 second');

})