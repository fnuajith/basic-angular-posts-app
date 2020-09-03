# basic-angular-posts-app

What we have here is a basic angular application where users can
- Create posts   
- List posts

#### Home page ####  
![home-page](/docs/images/home-page.JPG)  

#### Posts page  ####  
![posts-page](/docs/images/posts-page.JPG)

The application will use
- [x] Core concepts of Angular
	- [x] Components, Services, Models, Event binding, Two way binding
	- [x] Data sharing between components using ```rxjs``` observables
- [x] [Angular Routing](https://angular.io/guide/router)
- [x] [Angular Material](https://material.angular.io/)

### Setting up the project ###

Create a new angular project by running the below command  
```ng new basic-angular-posts-app```  
Select 'y' when prompted if you want to add Routing into the application Select 'SCSS' when prompted to select styling

Navigate into the project  
```cd basic-angular-posts-app```

Check if the boilerplate app works fine by running the below command  
```ng serve```

Once the code gets compiled, the below message should get printed on the command prompt  
```** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ** : Compiled successfully.```  
Open a browser window and type the URL ```http://localhost:4200/``` to see the boilerplate angular app running.

Open the application in your IDE to begin developing the application.  

Add 'FormsModule' into our application. The 'FormsModule' would be required to achieve two way data binding.  
In the file ```app.module.ts```, import the below modules and add the module into imports array  
```import { FormsModule} from '@angular/forms';```

Run the below command to add angular material into the project  
```ng add @angular/material```

Go to ```app.module.ts``` file and import the below angular material modules into the project and add them into the imports array. We will be using these components in this application  
```
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
```  

Plan, at a high level  
- Create a 'header' component to show the application title and routes
- Create a 'home' component to display application's home page
- Create a 'posts' component to encapsulate the post creation and post list functionalities
- Create a 'post' model to perform type-checking
- Create a 'post' service to add and retrieve posts
- Create a 'post-create' component to create posts
- Create a 'post-list' component to display posts

#### Create Components ####

Application header component  
```ng g c header```

Application header component  
```ng g c home```

Component to encapsulate the post creation and post list components  
```ng g c posts```

Component to create posts  
```ng g c posts/post-create```

Component to list posts  
```ng g c posts/post-list```


#### Create model ####
Create the model as an interface, as we will need this only to enforce structure i.e. type-checking. 
Create a new file by the name ```post.model.ts``` under the 'posts' folder
```
export interface Post {
  title: string;
  content: string;
}
```

#### Create service ####
Create a service to add and retrieve posts.   
```ng g s posts/post```  
_*Note:* Services are also a great way for different components in the application to access the same set of data. Alternatively, data can also be shared between components using the Angular's core EventEmitter by creating chains of property (@Input) and event (@Output) binding, but this pattern becomes difficult to manage as the application grows.
We will instead be using ```rxjs``` observables to communicate(publish) changes to the data from service to individual components(subscribers)_

Refer to the source code in this repo to understand how all these components come together to achieve the desired functionality.

