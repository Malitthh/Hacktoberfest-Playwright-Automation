#### Steps for contribution

1. Fork the repo

2. Clone the forked repo into your local machine <br>
``` bash 
$ git clone https://github.com/your_username/playwright-automation.git
```

3. cd to the repo
```bash
 $ cd playwright-automation 
 ```

4. Create a branch
```bash
    $ git checkout -b mybranch
```

5. Open the repo code using any IDE/text-editors

6. Please include your test data under the "fixture" folder and your test scripts under the "test" folder. Utilize "commons.ts" to store common methods. Write any UI or API scripts related to your desired topic.

7. Add, Commit and Push the changes to your forked repo
``` bash
$ git add .

$ git commit -m "your commit message"

$ git push origin mybranch
```

8. Create a pull request from `mybranch` of your forked repo to `main` branch of this(upstream) repo.

<br>


#### Naming Conventions
Name the packages, classes, interfaces, variables, methods following the convention.
<br><br>
<div class="otable-w1">
<table class="otable-w2 otable-tech-basic">    <thead>         <tr>             <th>       <a name="15405" id="15405"></a>            Identifier Type</th>             <th> <a name="15407" id="15407"></a>            Rules for Naming</th>             <th><a name="15409" id="15409"></a>            Examples</th>         </tr>  </thead><tbody>       <tr>             <td>             <p><a name="28840" id="28840"></a> Packages</td>             <td><a name="34793" id="34793"></a> Package names should be unique and descriptive. It's best to choose a name that is relevant to the functionality or purpose of the package. The name should be all lowercase, without spaces, and can include hyphens, underscores, or letters.</p>             <p><a name="28865" id="28865"></a> Packages are versioned using Semantic Versioning (SemVer). A typical versioning format is MAJOR.MINOR.PATCH, where MAJOR represents breaking changes, MINOR represents new features without breaking changes, and PATCH represents bug fixes and patches.</td>             <td><a name="34962" id="34962"></a> lodash</p>             <p><a name="34966" id="34966"></a> axios</p>             <p><a name="34967" id="34967"></a></p>             <p><a name="28894" id="28894"></a> express</td>         </tr>         <tr>             <td><a name="15411" id="15411"></a> Classes</td>             <td><a name="15413" id="15413"></a> Class names should start with a capital letter and use camel case. Camel case means the first letter of each word is capitalized, and there are no spaces or underscores between words.</td>             <td><a name="15415" id="15415"></a> class Person             <br>             class Cars</td>         </tr>         <tr>             <td><a name="15417" id="15417"></a> Interfaces</td>             <td><a name="15419" id="15419"></a> Interface names should start with a capital letter and use camel case. Camel case means the first letter of each word is capitalized, and there are no spaces or underscores between words.</td>             <td><a name="15421" id="15421"></a> interface Animal             <br>             interface Humans</td>         </tr>         <tr>             <td><a name="15423" id="15423"></a> Methods</td>             <td><a name="15425" id="15425"></a> Method names should be written in camel case, starting with a lowercase letter. Camel case means the first letter of the method name is in lowercase, and each subsequent word starts with an uppercase letter, without any spaces or underscores.</td>             <td><a name="15427" id="15427"></a> startEngine()             <br>             brake()             <br>             accelerate(speed)</td>         </tr>         <tr>             <td><a name="15429" id="15429"></a> Variables</td>             <td><a name="34851" id="34851"></a> Variable names should be written in camel case, starting with a lowercase letter. Camel case means the first letter of the variable name is in lowercase, and each subsequent word starts with an uppercase letter, without any spaces or underscores. ariable names should be descriptive and indicate the purpose of the data they are storing. Use meaningful names that reflect the content of the variable. Avoid using reserved keywords (e.g., function, class, let, const, etc.) as variable names. </td>             <td><a name="15434" id="15434"></a> const firstName = 'John';             <br>             let age = 30;             <br>            var isStudent = true; </td>         </tr>

</code></pre></div></td>         </tr>         <tr>                      </tr>     </tbody> </table>  </div></div>    <!-- CN15v0 -->

#### Commit Format

When you commit follow this if possible, 

`type : Description`

`git commit -m "refactor:Login TC updated"`

few types,

`feat:` when relates to features

`fix:` when relates to bug fixes

`docs:` when relates to documentation

`style:` when relates to style

`refactor:` when relates to code refactoring

`test:` when relates to test files

`revert:` when relates to revert

Reference: 
https://www.w3schools.com/js/js_conventions.asp
https://playwright.dev/docs/intro
