package org.ordimission.wishlist.application.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link AnswerListSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class AnswerListSearchRepositoryMockConfiguration {

    @MockBean
    private AnswerListSearchRepository mockAnswerListSearchRepository;

}
