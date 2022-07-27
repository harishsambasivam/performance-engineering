// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 2,
  duration: "1m"
}

export default function main() {
  let response

  group('page_1 - https://github.com/', function () {
    response = http.get('https://github.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/for_you_feed/filter_component', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-element_ts-441947f8a48c.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-stack-element_ts-82d45f1b2a6a.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_site_header_notification-indicator-element_ts-3f292f59240b.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.com/dashboard/changelog', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/light-92c7d381038e.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/primer-10084108b209.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/global-3cab694d24ba.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/github-fee1576e5bd2.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/dashboard-07bc42302f30.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/site-d31ea144555c.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/home-c9872ceebe50.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/runtime-e75614570df8.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js-d7a4b6c3d779.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-ce85b8ddf537.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/environment-af027e781a77.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_selector-observer_dist_index_esm_js-e7b34f84fd30.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe-12cdb93781b2.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js-63d9f1233d28.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750-24a46543c349.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_time-elements_dist_index_js-6b0fc833db14.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05-583a14057bbd.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/github-elements-cd052b594283.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/element-registry-2abd0e44ea8f.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-50b1c3ae31f7.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd-9cd313faa368.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-5881a7-bc9f56f70500.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-b114cf-39e9f0db72b1.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_soft-nav_navigate_ts-f81d99ecafdb.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-af52ef-156ebbd0b30e.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6-7556092b9727.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/behaviors-eb0fe6fb1f38.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/notifications-global-864911964b3f.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/dashboard-56ca15e3d800.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9-cddf745b4dad.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-e4591b-0e40d13e2126.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd-e411d970751d.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/command-palette-07611a44efc1.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/39916450?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/34158975?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/99602169?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/t/6179914?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/t/5677219?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/t/5285747?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/t/5051321?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/images/mona-loading-default.gif', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/images/mona-loading-default-static.svg', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/favicons/favicon.png', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.com/users/harishsambasivam/feature_preview/indicator_check',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.com/dashboard/my_top_repositories?location=left', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/dashboard/recent-activity', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/dashboard/my_top_repositories?location=center', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/dashboard/recent-activity', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/for_you_feed/filter_component', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/dashboard-feed', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/for_you_feed', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-element_ts-441947f8a48c.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-stack-element_ts-82d45f1b2a6a.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_site_header_notification-indicator-element_ts-3f292f59240b.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.com/dashboard/changelog', {
      headers: {
        accept: 'text/html',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://collector.github.com/github/collect',
      '{"client_id":"1758525508.1648904360","page_views":[{"page":"https://github.com/","title":"GitHub","context":{"actor_id":"39916450","actor_login":"harishsambasivam","actor_hash":"0eb23b020362a534c01e9ed4f8c073030839d59e418dad224fd07aec80530cb1","referrer":null,"request_id":"7376:5E97:5D5422:6AE419:62DA791F","visitor_id":"7552809547690690728","region_edge":"ap-south-1","region_render":"iad"}}],"request_context":{"referrer":"","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","screen_resolution":"1440x900","browser_resolution":"1440x731","browser_languages":"en-GB,en-US,en","pixel_ratio":2,"timestamp":1658485024765,"tz_seconds":19800}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/favicons/favicon.svg', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/manifest.json', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://api.github.com/_private/browser/stats',
      '{"stats":[{"webVitalTimings":[{"name":"https://github.com/","hpc":686.3000000007451}],"timestamp":1658485024738,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/","fcp":693.1999999992549}],"timestamp":1658485024761,"loggedIn":true},{"resourceTimings":[{"name":"https://github.githubassets.com/assets/light-92c7d381038e.css","entryType":"resource","startTime":609.8999999985099,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":609.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":609.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/primer-10084108b209.css","entryType":"resource","startTime":610,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/global-3cab694d24ba.css","entryType":"resource","startTime":610.0999999977648,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.0999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.0999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/github-fee1576e5bd2.css","entryType":"resource","startTime":610.0999999977648,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.0999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.0999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/dashboard-07bc42302f30.css","entryType":"resource","startTime":610.1999999992549,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.1999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.1999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/site-d31ea144555c.css","entryType":"resource","startTime":610.3000000007451,"duration":72.39999999850988,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":682.6999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/home-c9872ceebe50.css","entryType":"resource","startTime":610.3000000007451,"duration":72.59999999776483,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":682.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/runtime-e75614570df8.js","entryType":"resource","startTime":610.3999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.3999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.3999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js-d7a4b6c3d779.js","entryType":"resource","startTime":610.3999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.3999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.3999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-ce85b8ddf537.js","entryType":"resource","startTime":610.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/environment-af027e781a77.js","entryType":"resource","startTime":610.5999999977648,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.5999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.5999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_selector-observer_dist_index_esm_js-e7b34f84fd30.js","entryType":"resource","startTime":610.5999999977648,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.5999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.5999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe-12cdb93781b2.js","entryType":"resource","startTime":610.6999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.6999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.6999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js-63d9f1233d28.js","entryType":"resource","startTime":610.6999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.6999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.6999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750-24a46543c349.js","entryType":"resource","startTime":610.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_time-elements_dist_index_js-6b0fc833db14.js","entryType":"resource","startTime":610.8999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05-583a14057bbd.js","entryType":"resource","startTime":610.8999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/github-elements-cd052b594283.js","entryType":"resource","startTime":610.8999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":610.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":610.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/element-registry-2abd0e44ea8f.js","entryType":"resource","startTime":611,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-50b1c3ae31f7.js","entryType":"resource","startTime":611.0999999977648,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.0999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.0999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd-9cd313faa368.js","entryType":"resource","startTime":611.1999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.1999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.1999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-5881a7-bc9f56f70500.js","entryType":"resource","startTime":611.1999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.1999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.1999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-b114cf-39e9f0db72b1.js","entryType":"resource","startTime":611.1999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.1999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.1999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_soft-nav_navigate_ts-f81d99ecafdb.js","entryType":"resource","startTime":611.3000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.3000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-af52ef-156ebbd0b30e.js","entryType":"resource","startTime":611.3999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.3999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.3999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6-7556092b9727.js","entryType":"resource","startTime":611.3999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.3999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.3999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/behaviors-eb0fe6fb1f38.js","entryType":"resource","startTime":611.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/notifications-global-864911964b3f.js","entryType":"resource","startTime":611.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/dashboard-56ca15e3d800.js","entryType":"resource","startTime":611.5999999977648,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.5999999977648,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.5999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9-cddf745b4dad.js","entryType":"resource","startTime":611.6999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.6999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.6999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-e4591b-0e40d13e2126.js","entryType":"resource","startTime":611.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd-e411d970751d.js","entryType":"resource","startTime":611.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/command-palette-07611a44efc1.js","entryType":"resource","startTime":611.8999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":611.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":611.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/39916450?s=40&v=4","entryType":"resource","startTime":612,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612,"domainLookupStart":612,"domainLookupEnd":612,"connectStart":612,"connectEnd":612,"secureConnectionStart":612,"requestStart":0,"responseStart":0,"responseEnd":612,"transferSize":1860,"encodedBodySize":1560,"decodedBodySize":1560,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/34158975?s=40&v=4","entryType":"resource","startTime":612.0999999977648,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.0999999977648,"domainLookupStart":612.0999999977648,"domainLookupEnd":612.0999999977648,"connectStart":612.0999999977648,"connectEnd":612.0999999977648,"secureConnectionStart":612.0999999977648,"requestStart":0,"responseStart":0,"responseEnd":612.0999999977648,"transferSize":2058,"encodedBodySize":1758,"decodedBodySize":1758,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/99602169?s=40&v=4","entryType":"resource","startTime":612.0999999977648,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.0999999977648,"domainLookupStart":612.0999999977648,"domainLookupEnd":612.0999999977648,"connectStart":612.0999999977648,"connectEnd":612.0999999977648,"secureConnectionStart":612.0999999977648,"requestStart":0,"responseStart":0,"responseEnd":612.0999999977648,"transferSize":1886,"encodedBodySize":1586,"decodedBodySize":1586,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/t/6179914?s=16&v=4","entryType":"resource","startTime":612.1999999992549,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.1999999992549,"domainLookupStart":612.1999999992549,"domainLookupEnd":612.1999999992549,"connectStart":612.1999999992549,"connectEnd":612.1999999992549,"secureConnectionStart":612.1999999992549,"requestStart":0,"responseStart":0,"responseEnd":612.1999999992549,"transferSize":1853,"encodedBodySize":1553,"decodedBodySize":1553,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/t/5677219?s=16&v=4","entryType":"resource","startTime":612.1999999992549,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.1999999992549,"domainLookupStart":612.1999999992549,"domainLookupEnd":612.1999999992549,"connectStart":612.1999999992549,"connectEnd":612.1999999992549,"secureConnectionStart":612.1999999992549,"requestStart":0,"responseStart":0,"responseEnd":612.1999999992549,"transferSize":1866,"encodedBodySize":1566,"decodedBodySize":1566,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/t/5285747?s=16&v=4","entryType":"resource","startTime":612.3000000007451,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.3000000007451,"domainLookupStart":612.3000000007451,"domainLookupEnd":612.3000000007451,"connectStart":612.3000000007451,"connectEnd":612.3000000007451,"secureConnectionStart":612.3000000007451,"requestStart":0,"responseStart":0,"responseEnd":612.3000000007451,"transferSize":1854,"encodedBodySize":1554,"decodedBodySize":1554,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/t/5051321?s=16&v=4","entryType":"resource","startTime":612.3999999985099,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.3999999985099,"domainLookupStart":612.3999999985099,"domainLookupEnd":612.3999999985099,"connectStart":612.3999999985099,"connectEnd":612.3999999985099,"secureConnectionStart":612.3999999985099,"requestStart":0,"responseStart":0,"responseEnd":612.3999999985099,"transferSize":1865,"encodedBodySize":1565,"decodedBodySize":1565,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/mona-loading-default.gif","entryType":"resource","startTime":612.5,"duration":0,"initiatorType":"img","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":612.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/mona-loading-default-static.svg","entryType":"resource","startTime":612.5,"duration":0,"initiatorType":"img","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":612.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":612.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/favicons/favicon.png","entryType":"resource","startTime":615.5,"duration":100.59999999776483,"initiatorType":"other","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":615.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":716.0999999977648,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-element_ts-441947f8a48c.js","entryType":"resource","startTime":685.8999999985099,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":685.8999999985099,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":685.8999999985099,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-stack-element_ts-82d45f1b2a6a.js","entryType":"resource","startTime":686,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":686,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":686,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_site_header_notification-indicator-element_ts-3f292f59240b.js","entryType":"resource","startTime":686.1999999992549,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":686.1999999992549,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":686.1999999992549,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]}],"timestamp":1658485024770,"loggedIn":true},{"navigationTimings":[{"name":"https://github.com/","entryType":"navigation","startTime":0,"duration":713.8000000007451,"initiatorType":"navigation","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":0.3999999985098839,"domainLookupStart":0.3999999985098839,"domainLookupEnd":0.3999999985098839,"connectStart":0.3999999985098839,"connectEnd":0.3999999985098839,"secureConnectionStart":0.3999999985098839,"requestStart":2,"responseStart":601,"responseEnd":603.8000000007451,"transferSize":34632,"encodedBodySize":34332,"decodedBodySize":166222,"serverTiming":[],"workerTiming":[],"unloadEventStart":605.0999999977648,"unloadEventEnd":605.0999999977648,"domInteractive":629.0999999977648,"domContentLoadedEventStart":661.8000000007451,"domContentLoadedEventEnd":661.8000000007451,"domComplete":712.8999999985099,"loadEventStart":713.1999999992549,"loadEventEnd":713.8000000007451,"type":"reload","redirectCount":0}],"timestamp":1658485024770,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/","ttfb":601}],"timestamp":1658485024770,"loggedIn":true}]}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/favicons/favicon.png', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/34158975?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/39916450?s=16&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/91874993?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/61337194?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/61337194?s=80&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/37194881?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/apple-touch-icon-144x144.png', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/4792552?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/4792552?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/38380040?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/63681715?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/49782771?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/1699795?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/7195757?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/32689599?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/29177546?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/15651?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/16133926?s=120&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/3192747?s=120&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/61337194?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/108592928?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/26872990?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/26872990?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/17125876?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/33768711?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/16785467?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/435833?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/70731693?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/20748185?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/30747241?s=120&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/21153242?s=120&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/20748185?s=96&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/23030995?s=96&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/3683599?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.com/byjus-orders/byjus-serverless-api/hovercard', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
  })

  group('page_2 - https://github.com/byjus-orders/byjus-serverless-api', function () {
    response = http.post(
      'https://api.github.com/_private/browser/stats',
      '{"stats":[{"webVitalTimings":[{"name":"https://github.com/","lcp":1060.599}],"timestamp":1658485026285,"loggedIn":true},{"hydroEventPayload":"{\\"event_type\\":\\"dashboard.click\\",\\"payload\\":{\\"event_context\\":\\"REPOSITORIES\\",\\"target\\":\\"REPOSITORY\\",\\"record_id\\":400422691,\\"dashboard_context\\":\\"user\\",\\"dashboard_version\\":2,\\"user_id\\":39916450,\\"originating_url\\":\\"https://github.com/dashboard/my_top_repositories?location=left\\"}}","hydroEventHmac":"59bd2ba9ccb89518679df21f29333ad06e5182c4aa23658d04da83be513ced0b","visitorPayload":"eyJyZWZlcnJlciI6bnVsbCwicmVxdWVzdF9pZCI6IjczNzY6NUU5Nzo1RDU0MjI6NkFFNDE5OjYyREE3OTFGIiwidmlzaXRvcl9pZCI6Ijc1NTI4MDk1NDc2OTA2OTA3MjgiLCJyZWdpb25fZWRnZSI6ImFwLXNvdXRoLTEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=","visitorHmac":"cf5a6249876e5fb16e8d70e91cba7c9953949102a0c109813b47254d9ca9d983","hydroClientContext":"","timestamp":1658485026286,"loggedIn":true}]}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.com/byjus-orders/byjus-serverless-api', {
      headers: {
        referer: 'https://github.com/',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://api.github.com/_private/browser/stats',
      '{"stats":[{"webVitalTimings":[{"name":"https://github.com/","fid":1}],"timestamp":1658485026300,"loggedIn":true}]}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://api.github.com/_private/browser/stats',
      '{"stats":[{"hydroEventPayload":"{\\"event_type\\":\\"repository-hovercard-hover\\",\\"payload\\":{\\"repositoryId\\":400422691,\\"subject\\":null,\\"originating_url\\":\\"https://github.com/byjus-orders/byjus-serverless-api/hovercard\\",\\"user_id\\":39916450}}","hydroEventHmac":"eb01d6d45bbffee1cf01234d7eab80fb3e09e00a9dc641a94eab3458fe779575","visitorPayload":"eyJyZWZlcnJlciI6bnVsbCwicmVxdWVzdF9pZCI6IjczNzY6NUU5Nzo1RDU0MjI6NkFFNDE5OjYyREE3OTFGIiwidmlzaXRvcl9pZCI6Ijc1NTI4MDk1NDc2OTA2OTA3MjgiLCJyZWdpb25fZWRnZSI6ImFwLXNvdXRoLTEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=","visitorHmac":"cf5a6249876e5fb16e8d70e91cba7c9953949102a0c109813b47254d9ca9d983","hydroClientContext":"","timestamp":1658485026763,"loggedIn":true}]}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/light-92c7d381038e.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/primer-10084108b209.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/global-3cab694d24ba.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/github-fee1576e5bd2.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/code-3d7b701fc6eb.css', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/runtime-e75614570df8.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js-d7a4b6c3d779.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-ce85b8ddf537.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/environment-af027e781a77.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_selector-observer_dist_index_esm_js-e7b34f84fd30.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe-12cdb93781b2.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js-63d9f1233d28.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750-24a46543c349.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_time-elements_dist_index_js-6b0fc833db14.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05-583a14057bbd.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/github-elements-cd052b594283.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://github.githubassets.com/assets/element-registry-2abd0e44ea8f.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-50b1c3ae31f7.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd-9cd313faa368.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-5881a7-bc9f56f70500.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-b114cf-39e9f0db72b1.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_soft-nav_navigate_ts-f81d99ecafdb.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-af52ef-156ebbd0b30e.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6-7556092b9727.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/behaviors-eb0fe6fb1f38.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/notifications-global-864911964b3f.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-089adc-b0a82315cced.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/optimizely-57daa9b84e06.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-94b982bc965c.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-16f3e12-d051f5dfe26d.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/codespaces-7a3a740d0dfc.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_filter--63965d-cf635c9badcd.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_fetch_ts-app_assets_modules_github_input-demux_ts-app_assets_module-e5b55c-7e22ed21a877.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/repositories-53b7c005e210.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/topic-suggestions-3ededa85c6e4.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/code-menu-e0411944a6af.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9-cddf745b4dad.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-e4591b-0e40d13e2126.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd-e411d970751d.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/assets/command-palette-07611a44efc1.js', {
      headers: {
        origin: 'https://github.com',
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/39916450?s=40&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/82089384?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/30747241?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/39916450?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/27016488?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/10379505?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/86400006?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/102507679?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/4308707?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/16133926?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/91866785?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/95673379?s=64&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.com/users/harishsambasivam/feature_preview/indicator_check',
      {
        headers: {
          accept: 'application/json',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-element_ts-441947f8a48c.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-stack-element_ts-82d45f1b2a6a.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_files_readme-toc-element_ts-b96570259d3f.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_github_feature-callout-element_ts-eb5a629931ff.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.githubassets.com/assets/chunk-app_components_site_header_notification-indicator-element_ts-3f292f59240b.js',
      {
        headers: {
          origin: 'https://github.com',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/security/overall-count',
      {
        headers: {
          accept: 'text/fragment+html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/spoofed_commit_check/15cf4e2fbdfdcd4146b3cbcc38e5194214be9c74',
      {
        headers: {
          accept: 'text/html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/show_partial?partial=tree%2Frecently_touched_branches_list',
      {
        headers: {
          accept: 'text/html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/overview_actions/development',
      {
        headers: {
          accept: 'text/html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/tree-commit/15cf4e2fbdfdcd4146b3cbcc38e5194214be9c74',
      {
        headers: {
          accept: 'text/html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/file-list/development',
      {
        headers: {
          accept: 'text/html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://collector.github.com/github/collect',
      '{"client_id":"1758525508.1648904360","page_views":[{"page":"https://github.com/byjus-orders/byjus-serverless-api","title":"byjus-orders/byjus-serverless-api","context":{"actor_id":"39916450","actor_login":"harishsambasivam","actor_hash":"0eb23b020362a534c01e9ed4f8c073030839d59e418dad224fd07aec80530cb1","user_id":"34158975","user_login":"byjus-orders","repository_id":"400422691","repository_nwo":"byjus-orders/byjus-serverless-api","repository_public":"false","repository_is_fork":"false","repository_network_root_id":"400422691","repository_network_root_nwo":"byjus-orders/byjus-serverless-api","referrer":"https://github.com/","request_id":"7376:5E97:5D553C:6AE540:62DA7922","visitor_id":"7552809547690690728","region_edge":"ap-south-1","region_render":"iad"}}],"request_context":{"referrer":"https://github.com/","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","screen_resolution":"1440x900","browser_resolution":"1440x715","browser_languages":"en-GB,en-US,en","pixel_ratio":2,"timestamp":1658485027406,"tz_seconds":19800}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.com/manifest.json', {
      headers: {
        referer: 'https://github.com/byjus-orders/byjus-serverless-api',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://api.github.com/_private/browser/stats',
      '{"stats":[{"webVitalTimings":[{"name":"https://github.com/byjus-orders/byjus-serverless-api","hpc":988.2000000029802}],"timestamp":1658485027276,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/byjus-orders/byjus-serverless-api","fcp":993.2000000029802}],"timestamp":1658485027282,"loggedIn":true},{"longTasks":[{"name":"self","duration":73,"url":"https://github.com/byjus-orders/byjus-serverless-api"}],"timestamp":1658485027282,"loggedIn":true},{"resourceTimings":[{"name":"https://github.githubassets.com/assets/light-92c7d381038e.css","entryType":"resource","startTime":881.8000000007451,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":881.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":881.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/primer-10084108b209.css","entryType":"resource","startTime":881.9000000022352,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":881.9000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":881.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/global-3cab694d24ba.css","entryType":"resource","startTime":882.1000000014901,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.1000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.1000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/github-fee1576e5bd2.css","entryType":"resource","startTime":882.2000000029802,"duration":0,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/code-3d7b701fc6eb.css","entryType":"resource","startTime":882.3000000007451,"duration":78.80000000074506,"initiatorType":"link","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":961.1000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/runtime-e75614570df8.js","entryType":"resource","startTime":882.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js-d7a4b6c3d779.js","entryType":"resource","startTime":882.6000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.6000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-ce85b8ddf537.js","entryType":"resource","startTime":882.7000000029802,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.7000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.7000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/environment-af027e781a77.js","entryType":"resource","startTime":882.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_selector-observer_dist_index_esm_js-e7b34f84fd30.js","entryType":"resource","startTime":882.9000000022352,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":882.9000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":882.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe-12cdb93781b2.js","entryType":"resource","startTime":883,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js-63d9f1233d28.js","entryType":"resource","startTime":883.2000000029802,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750-24a46543c349.js","entryType":"resource","startTime":883.2000000029802,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_time-elements_dist_index_js-6b0fc833db14.js","entryType":"resource","startTime":883.4000000022352,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.4000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.4000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05-583a14057bbd.js","entryType":"resource","startTime":883.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/github-elements-cd052b594283.js","entryType":"resource","startTime":883.6000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.6000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/element-registry-2abd0e44ea8f.js","entryType":"resource","startTime":883.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-50b1c3ae31f7.js","entryType":"resource","startTime":883.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd-9cd313faa368.js","entryType":"resource","startTime":883.9000000022352,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":883.9000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":883.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-5881a7-bc9f56f70500.js","entryType":"resource","startTime":884.1000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.1000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.1000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-b114cf-39e9f0db72b1.js","entryType":"resource","startTime":884.2000000029802,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_soft-nav_navigate_ts-f81d99ecafdb.js","entryType":"resource","startTime":884.3000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.3000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-af52ef-156ebbd0b30e.js","entryType":"resource","startTime":884.4000000022352,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.4000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.4000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-29e9d6-7556092b9727.js","entryType":"resource","startTime":884.5,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/behaviors-eb0fe6fb1f38.js","entryType":"resource","startTime":884.6000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.6000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/notifications-global-864911964b3f.js","entryType":"resource","startTime":884.7000000029802,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.7000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":884.7000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-089adc-b0a82315cced.js","entryType":"resource","startTime":884.8000000007451,"duration":78.5,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":963.3000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/optimizely-57daa9b84e06.js","entryType":"resource","startTime":884.9000000022352,"duration":92.09999999776483,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":884.9000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":977,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-94b982bc965c.js","entryType":"resource","startTime":885,"duration":92.40000000223517,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":977.4000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-16f3e12-d051f5dfe26d.js","entryType":"resource","startTime":885,"duration":92.60000000149012,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":977.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/codespaces-7a3a740d0dfc.js","entryType":"resource","startTime":885.1000000014901,"duration":94.10000000149012,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.1000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":979.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_filter--63965d-cf635c9badcd.js","entryType":"resource","startTime":885.2000000029802,"duration":144.39999999850988,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1029.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_fetch_ts-app_assets_modules_github_input-demux_ts-app_assets_module-e5b55c-7e22ed21a877.js","entryType":"resource","startTime":885.3000000007451,"duration":144.69999999925494,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1030,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/repositories-53b7c005e210.js","entryType":"resource","startTime":885.3000000007451,"duration":162.5,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1047.800000000745,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/topic-suggestions-3ededa85c6e4.js","entryType":"resource","startTime":885.4000000022352,"duration":159.5,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.4000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1044.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9-cddf745b4dad.js","entryType":"resource","startTime":885.6000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.6000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":885.6000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/code-menu-e0411944a6af.js","entryType":"resource","startTime":885.6000000014901,"duration":162.5,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.6000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1048.1000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-e4591b-0e40d13e2126.js","entryType":"resource","startTime":885.8000000007451,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":885.8000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":885.8000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd-e411d970751d.js","entryType":"resource","startTime":886,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":886,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/command-palette-07611a44efc1.js","entryType":"resource","startTime":886.1000000014901,"duration":0,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.1000000014901,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":886.1000000014901,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/39916450?s=40&v=4","entryType":"resource","startTime":886.3000000007451,"duration":0,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.3000000007451,"domainLookupStart":886.3000000007451,"domainLookupEnd":886.3000000007451,"connectStart":886.3000000007451,"connectEnd":886.3000000007451,"secureConnectionStart":886.3000000007451,"requestStart":0,"responseStart":0,"responseEnd":886.3000000007451,"transferSize":1860,"encodedBodySize":1560,"decodedBodySize":1560,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/82089384?s=64&v=4","entryType":"resource","startTime":886.3000000007451,"duration":75.80000000074506,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.3000000007451,"domainLookupStart":886.3000000007451,"domainLookupEnd":886.3000000007451,"connectStart":886.3000000007451,"connectEnd":886.3000000007451,"secureConnectionStart":886.3000000007451,"requestStart":903.4000000022352,"responseStart":961.9000000022352,"responseEnd":962.1000000014901,"transferSize":1855,"encodedBodySize":1555,"decodedBodySize":1555,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/30747241?s=64&v=4","entryType":"resource","startTime":886.4000000022352,"duration":75.80000000074506,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.4000000022352,"domainLookupStart":886.4000000022352,"domainLookupEnd":886.4000000022352,"connectStart":886.4000000022352,"connectEnd":886.4000000022352,"secureConnectionStart":886.4000000022352,"requestStart":904.3000000007451,"responseStart":962.1000000014901,"responseEnd":962.2000000029802,"transferSize":1827,"encodedBodySize":1527,"decodedBodySize":1527,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/39916450?s=64&v=4","entryType":"resource","startTime":886.5,"duration":77,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.5,"domainLookupStart":886.5,"domainLookupEnd":886.5,"connectStart":886.5,"connectEnd":886.5,"secureConnectionStart":886.5,"requestStart":904.9000000022352,"responseStart":963.4000000022352,"responseEnd":963.5,"transferSize":1860,"encodedBodySize":1560,"decodedBodySize":1560,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/27016488?s=64&v=4","entryType":"resource","startTime":886.5,"duration":77.20000000298023,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.5,"domainLookupStart":886.5,"domainLookupEnd":886.5,"connectStart":886.5,"connectEnd":886.5,"secureConnectionStart":886.5,"requestStart":905,"responseStart":963.6000000014901,"responseEnd":963.7000000029802,"transferSize":1973,"encodedBodySize":1673,"decodedBodySize":1673,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/10379505?s=64&v=4","entryType":"resource","startTime":886.5,"duration":77.5,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.5,"domainLookupStart":886.5,"domainLookupEnd":886.5,"connectStart":886.5,"connectEnd":886.5,"secureConnectionStart":886.5,"requestStart":905.5,"responseStart":963.8000000007451,"responseEnd":964,"transferSize":2324,"encodedBodySize":2024,"decodedBodySize":2024,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/86400006?s=64&v=4","entryType":"resource","startTime":886.6000000014901,"duration":135.10000000149012,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.6000000014901,"domainLookupStart":886.6000000014901,"domainLookupEnd":886.6000000014901,"connectStart":886.6000000014901,"connectEnd":886.6000000014901,"secureConnectionStart":886.6000000014901,"requestStart":962.8000000007451,"responseStart":1021.6000000014901,"responseEnd":1021.7000000029802,"transferSize":1643,"encodedBodySize":1343,"decodedBodySize":1343,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/102507679?s=64&v=4","entryType":"resource","startTime":886.7000000029802,"duration":134.69999999925494,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.7000000029802,"domainLookupStart":886.7000000029802,"domainLookupEnd":886.7000000029802,"connectStart":886.7000000029802,"connectEnd":886.7000000029802,"secureConnectionStart":886.7000000029802,"requestStart":962.5,"responseStart":1021.3000000007451,"responseEnd":1021.4000000022352,"transferSize":1878,"encodedBodySize":1578,"decodedBodySize":1578,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/4308707?s=64&v=4","entryType":"resource","startTime":886.8000000007451,"duration":136.5,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.8000000007451,"domainLookupStart":886.8000000007451,"domainLookupEnd":886.8000000007451,"connectStart":886.8000000007451,"connectEnd":886.8000000007451,"secureConnectionStart":886.8000000007451,"requestStart":963,"responseStart":1022.9000000022352,"responseEnd":1023.3000000007451,"transferSize":1910,"encodedBodySize":1610,"decodedBodySize":1610,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/16133926?s=64&v=4","entryType":"resource","startTime":886.9000000022352,"duration":134.59999999776483,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":886.9000000022352,"domainLookupStart":886.9000000022352,"domainLookupEnd":886.9000000022352,"connectStart":886.9000000022352,"connectEnd":886.9000000022352,"secureConnectionStart":886.9000000022352,"requestStart":962.8000000007451,"responseStart":1021.1000000014901,"responseEnd":1021.5,"transferSize":1988,"encodedBodySize":1688,"decodedBodySize":1688,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/91866785?s=64&v=4","entryType":"resource","startTime":887,"duration":134.10000000149012,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":887,"domainLookupStart":887,"domainLookupEnd":887,"connectStart":887,"connectEnd":887,"secureConnectionStart":887,"requestStart":962.7000000029802,"responseStart":1020.8000000007451,"responseEnd":1021.1000000014901,"transferSize":1865,"encodedBodySize":1565,"decodedBodySize":1565,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/95673379?s=64&v=4","entryType":"resource","startTime":887,"duration":136.5,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":887,"domainLookupStart":887,"domainLookupEnd":887,"connectStart":887,"connectEnd":887,"secureConnectionStart":887,"requestStart":962.8000000007451,"responseStart":1023.3000000007451,"responseEnd":1023.5,"transferSize":1768,"encodedBodySize":1468,"decodedBodySize":1468,"serverTiming":[],"workerTiming":[]},{"name":"https://github.com/users/harishsambasivam/feature_preview/indicator_check","entryType":"resource","startTime":971.9000000022352,"duration":0.6999999992549419,"initiatorType":"fetch","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":971.9000000022352,"domainLookupStart":971.9000000022352,"domainLookupEnd":971.9000000022352,"connectStart":971.9000000022352,"connectEnd":971.9000000022352,"secureConnectionStart":971.9000000022352,"requestStart":972.2000000029802,"responseStart":972.3000000007451,"responseEnd":972.6000000014901,"transferSize":0,"encodedBodySize":44,"decodedBodySize":24,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-element_ts-441947f8a48c.js","entryType":"resource","startTime":987.2000000029802,"duration":0.6999999992549419,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":987.2000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":987.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_command_palette_command-palette-page-stack-element_ts-82d45f1b2a6a.js","entryType":"resource","startTime":987.3000000007451,"duration":1,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":987.3000000007451,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":988.3000000007451,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_files_readme-toc-element_ts-b96570259d3f.js","entryType":"resource","startTime":987.5,"duration":71.70000000298023,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":987.5,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1059.2000000029802,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_github_feature-callout-element_ts-eb5a629931ff.js","entryType":"resource","startTime":987.7000000029802,"duration":113.19999999925494,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":987.7000000029802,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1100.9000000022352,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-app_components_site_header_notification-indicator-element_ts-3f292f59240b.js","entryType":"resource","startTime":987.9000000022352,"duration":42.899999998509884,"initiatorType":"script","nextHopProtocol":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":987.9000000022352,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1030.800000000745,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]}],"timestamp":1658485027410,"loggedIn":true},{"navigationTimings":[{"name":"https://github.com/byjus-orders/byjus-serverless-api","entryType":"navigation","startTime":0,"duration":1120.800000000745,"initiatorType":"navigation","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":2.300000000745058,"domainLookupStart":2.300000000745058,"domainLookupEnd":2.300000000745058,"connectStart":2.300000000745058,"connectEnd":2.300000000745058,"secureConnectionStart":2.300000000745058,"requestStart":11.700000002980232,"responseStart":864.6000000014901,"responseEnd":870.3000000007451,"transferSize":66767,"encodedBodySize":66467,"decodedBodySize":313039,"serverTiming":[],"workerTiming":[],"unloadEventStart":872.1000000014901,"unloadEventEnd":872.1000000014901,"domInteractive":912.1000000014901,"domContentLoadedEventStart":1061.9000000022352,"domContentLoadedEventEnd":1062,"domComplete":1118.1000000014901,"loadEventStart":1118.5,"loadEventEnd":1120.800000000745,"type":"navigate","redirectCount":0}],"timestamp":1658485027410,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/byjus-orders/byjus-serverless-api","ttfb":864.6000000014901}],"timestamp":1658485027410,"loggedIn":true}]}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://github.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://github.githubassets.com/apple-touch-icon-144x144.png', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://avatars.githubusercontent.com/u/10379505?s=48&v=4', {
      headers: {
        referer: 'https://github.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://github.com/byjus-orders/byjus-serverless-api/commit/15cf4e2fbdfdcd4146b3cbcc38e5194214be9c74/rollup?direction=sw',
      {
        headers: {
          accept: 'text/fragment+html',
          referer: 'https://github.com/byjus-orders/byjus-serverless-api',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
