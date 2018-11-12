// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print "fail" if the parameter is 0

public class DivideByZero {
    public static void main(String[] args) {
        divideByZero(2);
    }

    public static void divideByZero(int num) {
        try{
            int result = 10 / num;
            System.out.println(result);
        } catch(ArithmeticException e){
            System.out.println(e.getMessage());
        }
    }
}
