// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print "fail" if the parameter is 0

public class DivideByZero {
    public static void main(String args[]){
        divideByZero(0);
        divideByZero(2);
    }
    public static void divideByZero(int number){
        try {
            int result = 10 / number;
            System.out.println(result);
        } catch (ArithmeticException e){
            System.out.println("fail");
        }
    }
}