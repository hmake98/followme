import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = '/graphql';

export const createApollo = (httpLink: HttpLink) => {
    const basic = setContext((_operation, _context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));

    const auth = setContext((_operation, _context) => {
        const token = localStorage.getItem('token');

        if (token === null) {
            return {};
        } else {
            return {
                headers: {
                    Authorization: `JWT ${token}`
                }
            };
        }
    });

    const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
    const cache = new InMemoryCache();

    return {
        link,
        cache
    };
};

@NgModule({
    exports: [
        HttpClientModule,
    ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory: createApollo,
        deps: [HttpLink]
    }]
})
export class GraphQLModule { }
