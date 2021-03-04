// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



import java.io.IOException;
import java.util.ArrayList;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/page-salutation")
public final class PortfolioServer extends HttpServlet {


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    ArrayList<String> shows = new ArrayList<>();
    shows.add("Lupin");
    shows.add("New Girl");
    shows.add("Stranger Things");

    String json = convertToJsonUsingGson(shows);
    response.setContentType("application/json;");
    response.getWriter().println(json);
   
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList<String> shows) {
    Gson gson = new Gson();
    String json = gson.toJson(shows);
    return json;
  }
}
