
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        this.doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Get email entered in the form.
        String emailValue = request.getParameter("email-input");

        // Get the value entered in the form.
        String textValue = request.getParameter("text-input");

        // Print the value so you can see it in the server logs.
        System.out.println("You submitted: " + textValue);

        // Write the value to the response so the user can see it.
        response.getWriter().println(emailValue + " submitted: " + textValue);
        response.sendRedirect("http://cmongetorres-sps-spring21.appspot.com/");
    }
}