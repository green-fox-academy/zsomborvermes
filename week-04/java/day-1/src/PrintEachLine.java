import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class PrintEachLine {
    public static void main(String[] args) {
        // Write a program that opens a file called "my-file.txt", then prints
        // each of the lines form the file.
        // If the program is unable to read the file (for example it does not exists),
        // then it should print an error message like: "Unable to read file: my-file.txt"

        List<String> fileContent = readFile("new-file.txt");

        for(int i = 0; i < fileContent.size(); i++){
            System.out.println(fileContent.get(i));
        }
    }

    public static List<String> readFile(String path){
        try{
            Path filePath = Paths.get(path);
            List<String> lines = Files.readAllLines(filePath);
            return lines;
        } catch(IOException e) {
            System.out.println("Uh-oh, could not read the file!");
            return null;
        }
    }
}