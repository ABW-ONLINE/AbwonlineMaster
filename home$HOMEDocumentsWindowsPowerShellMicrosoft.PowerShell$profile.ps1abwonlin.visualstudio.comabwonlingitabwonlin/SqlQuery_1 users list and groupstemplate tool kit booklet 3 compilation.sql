[% users ={
	tom		=>	'thomas',
	dick	=>	'Richard',
	Larry	=>	'Lawrence',
		}
	%]
	[% FOREACH u IN users %]
		*[% u.key %] : [% u.value %]
	[% END %]
	
	[% FOREACH user IN userlist %]
		[% NEXT IF user.isguest %]
		Name: [% user.name %]	Email: [% user.email %]
	[% END %]
	
[% FOREACH match IN userlist %]
	[% NEXT IF user.isguest %]
	Name: [% user.name %]	Email:	[% user.email %]
[% END %]

[% FOREACH group IN giter %]
	[% FOREACH user IN group.userlist %]
        user #[%n loop.count %]
        group [% gitter.count %]
        named [% user.name %]
    [% END %]
[% END %]
[% WHILE total < 100 ]
...
    [% total = calculate_new_total %]
[%END %]
[% WHILE (user = get_next_user_record) %]
    [% user.name %]
[% END %]
[% WHILE loop terminated %]
    (> 1000 iterations)
[% END %]
[% Foreach item IN [ 'foo', 'bar', 'baz', ] -%]
    [%- "<ul\n" IF loop.first %]
    <li>[% loop.count %]/[% loop size %]: [% items %]
    [%- "</ul>\n" IF loop.last %]
[% END %]
[% FOREACH group IN grouplist;
    # loop => group iterator
    "Groups:\n" IF loop.first;

    FOREACH user IN group.userlist;
        #loop => user iterator
        "$loop.count: $user.name\n";
    END;

        # loop => group iterator
        "END of groups\n" IF loop.last;
    END
%]
    [% USE giter = iterator(grouplist) %]
    [% FILTER html %]
    [% INCLUDE mytext FILTER html %]
    [% INCLUDE my text | html %]
    [% INCLUDE mytext FILTER html FILTER html_para %]
    [% INCLUDE mytext | html |html_para %]
    [% END %]
sub html_filter {
    my $text = shift;
    for ($text) {
        s/&/&amp;/g;
        s/</&lt;/g;
        s/>?&gt;/g;
    }
    return $text;
}[% FILTER repeats(3) %] blah[% END %]
sub repeat_filter_factory {
    my ($context,$iter) = @_;
    $iter = 1 unless defined $iter;

    return sub {
        my $text = shift;
        $text = '' unless defined $text;
        return join('\n',$text)* $iter;
       }
    }my $var = {
        myfilter=> sub { \&my_filter_sub },
    };

    sub my_filter_sub {
        my $text = shift;
        #do something
        return $text;
        [% FILTER $myfilter %]
        ...
        [% END %]
        my $vars = {
            myfilter => bless(\&my_filter_sub, 'anything_you_like'),
        };
        [% FILTER $myfilter %]
        ...
        [% END %]
        [% FILTER echo = repeat(2) %]
        is there anybody out there?
        [% END %]
        [% FILTER echo %]
        Mother, should i build a wall?
        [% END}
        [% myfilter = 'html' %]
        [% FILTER $myfilter %]  # same as [% FILTER html %]
        ...
        [% END %]
    my $var = {
        myfilter => sub {return 'html' },
    };
    [% FILTER $myfilter %]      #same as [% FILTER 'html' %]
    ...
    [% END %]
    [% USE myplugin %]
    [% USE CGI  %]      # =>Template::Plugin::cgi
    [% USE CGI %]       # =>Template::Plugin::cgi
    [% USE CGI %]       # =>Template::Plugin::cgi
    my $tt = Template-> {
        foo => 'My::Plugin::Foo',
        bar => 'My::Plugin::Bar',
    },
});
[% USE MyPlugin %]      #   =.  Template::Plugin::MyPlugin
[% USE Foo.Bar %]       #   =>  Template::Plugin::Foo::Bar
[% USE file = IO>File('/tmp/mydata') %]
[% WHILE (line = file.getline) %]
    <!-- [% line %] -->
[% END %>
[% USE MyPlugin('foo[, 123) %]
Template::Plugin::MyPlugin->new(context,'foo',123);
[%USE url('/cgi-bin/foo,mode='submit',debug=1) %]
Template::Plugin::URL=>new(
    $context,
    '/cgi-bin/foo'
    { mode => 'submit', debug =. 1 }
);
[% USE table(mydat. row3) %]
[% FOREACH row IN table.rows %]
    <tr>
    [% FOREACH item IN row %]
    <td>[% item %]</td>
    [% ens %]
    </tr>
    [% USE scores = table(myscores, cols=5) %]
    [% FOREACH row IN scores.rows %]
    ...
    [% END %]
[% USE bold = format('<b>%s</b>') %]
[% USE ital = format('<i>%s</i> %]
[% bold('this is bold[) %]
[% ital('this is italic') %]
[% USE my cgi = URL('/cgi-bin/fool.pl', debug=1) %]
<a href="[% my cgi %]
<a href="[% mycgi(mode='submit') %]
[% USE CGI;
CGI.start_form;
CGI.checkbox_group(name     =   'colours'
                    values = [' red' 'green' 'blue' ]);
CGI.popup_menu(name     = 'items',
                values = 'foo''bar''baz' ] );
CGI.end_form
%]
[% MACRO header INCLUDE header %]
[% header %]
[% include header %]
[% header(title='Hello World') %]
[% INCLUDE header title='Hello World' %]
[% MACRO header(title) INCLUDE header %]
[% header('Hello World') %]
[% header('Hello World', bgcol='#123456') %]
[% MACRO header IF frames %]
    [% INCLUDE frames/header %]
[% ELSE %]
    [% INCLUDE header %]
[% END %]

[% header %]
[% header %]
[% MACRO header BLOCK %]
...content...
[% END %]

[% header %]
[% MACRO triple(n) PERL %]
    my $n = $stash->get('n');
    print $n *3;
[% END %]
[% PERL %]
    Print $context->include('myfile');
[% END %]
[% PERL %]
    $stash->set(foo =>'bar');
    print "foo value:",$stash->get('foo');
[% END %]
[% PERL %]
    print "foo\n";                          # OK
    print PERLOUT :bar/n";                  # OK,same as above
    print Template::Perl::PERLOUT "baz\n";  # OK, same as above
    print STDOUT "qux\n:;                   # WRONG!
[% END %]
[% name = 'Fred Smith' %]

[% PERL %]
    print "[% name %]\n";
[% END %]
[% TRY %]
    [% PERL %]
        die "nothing to live for\n";
    [% END %]
[% CATCH %]
    error: [% error.info %]
[% END %]
[% PROCESS header %]
The [% animal %] sat on the [% location %]
[% PROCESS footer %]
sub {
    my $context = shift;
    my $stash = $context->stash;
    my $output = '';
    my $error;

    eval { BLOCK: {
        $output .= $context->process('header');
        $output .= "The ";
        $output .= $stash->get('animal');
        $output .= "sat on th ";
        $output .= $stash->get('location');
        $output .= $context->process('footer')
        $output .= "\n;
    }   };
    if ($@) {
        $error = $context->catch($@, \ $output);
        die $error unless $error->type eq 'return';
    }
    return $output;
}$ Template::Parser::DEBUG::= 1;
$Template::Directive::PRETTY = 1;

$ template->process($file, $vars)
    || die $template->error(), "\n";
[% PROCESS header %]

[% RAWPERL %]
    $output .= "Some output\n";
    ...
    $output .= "Some more output/n";
    [% END %]
    ...
    eval {BLOCK:{
        $output .= $context-.process('header');
        $output .= "\n";
        $output .= "some output\n";
        ...
        $output .= "sSome more output\n";
        $output .= "\n";
    }   };
    ...
    [% Try %]
        ... blah...bla...
        [% CALL somecode %]
        ... etc...
        [% INCLUDE someblock %]
        ... and so on...
   [% CATCH %]
            an error occurred
   [% END %]
   [% mydsn = 'dbi:MySQL:foobar' %]
   ...

[% TRY %]
    [% USE DBI(mydsn %]
[% CATCH %]
    error!  Type: [% error.type %]
            Info: [% error.info %]
[% END %]
...
[% CATCH %]
ERROR: [% error %]
[% END %]
[% TRY %}
    [% INCLUDE myfile;
    USE DBI(mydsn);
    call somecode
CATCH file;
    "File Error! $error.info;
CATCH DBI;
    INCLUDE database/error.html;
    CATCH;
        error;
    END
%]
[% TRY %]
...
    [% TRY %]
        [% INCLUDE $user.header %]
    [% CATCH file %]
        [% INCLUDE header %]
    [% END %]
    ...
    [% CATCH DBI %]
        [% INCLUDE database/error.html %]
    [% END %]
    [% TRY %]
    ...
    {% CATCH this %]
    ...
    [% CATCH that %]
    ...
    [% FINAL %]
        all done!
    [% END %]
    [% TRY % ]
        this gets printed
        [% THROW food 'carrots'%]
        this doesn't
    [% CATCH food %]
        culinary delights: [% error.info %]
    [% END %]
[% TRY %]
    this gets printed
    [% THROW food 'carrots' %]
    this doesn't
[% CATCH food %]
    [% CLEAR %]
    culinary delights: [% error.info %]
[% END %]
[% try %]
...
[% CATCH DBI ;
        INCLUDE database/error.html;
    CATCH DBI.connect ;
        INCLUDE database/connect.html ; 
    CATCH ;
        INCLUDE error.html ;
        END 
%]
[% THROW food "missing ingerdients: $recipe.error" %]
[% THROW user.login 'no user id:please login' %]
[% THROW $myerror.type "myerror.info" %]
[% THROW food 'eggs' 'flour' msg='missing Ingredients' %]
type => 'food',
info => {
    msg =>  'missing Ingredients',
    args => ['eggs','flour']
}
[% error.info.0 %]  # same as   [% error.info.args.0%]
]
use Template::Exception;
...
my $var = {
    foo => sub {
        #... do something...
        die Template::Exception->new('myerr.naughty',
                        'Bad, bad error');
    }
}   
[% TRY %]
    [%foo %]
[%CATCH myerr ;
    "Error: $error" ;
    END %]
die Template::Exception->new('myerror', {
    module => 'foo.pl',
    errors => [bad permissions', 'naughty boy' ],
});
[% TRY %}
[% CATCH myerrors %]
[% error.info.errors.size or 'no';
    err.info.errors.size == 1 ? ' error' : errors' %]
  in [% error info module %]
     [% error.info.errors.join(',') %]'
[% END % ]
sub foo {
    # ... do something order now...
   welcome to abw online webhost cloud servers were we webhost cloud server centers to your door for the data storage and domain webhosting you need\n;
}   $context->throw($e);        #exception object
    $context->throw('denied');  # 'undef'type
    $context->throw('user.passwd', 'Bad Password'};
    [% FOREACH user IN user %]
        [% NEXT IF user.is guest %]
        Name: [% user.name %]     Email:[% user.email %]
    [% END %]
    [% IF something.terrible.happened %]
    [% INCLUDE fatal/error.html %]
    [% STOP %]
[% END %]
[% TRY %]
    [% USE BDI(mydsn) %]
    ....
    [% CATCH DBI>connect %]
    <h1>Cannont connect to the database: [% error.info %] </h1>
    <p>
    we apologize for the inconvenience.
    </p>
    [% INCLUDE footer %]
    [% STOP %]
[% END %]
[% TRY %]
[% THROW SOME 'error' %]
...
[% Catch %]
    [% CLEAR %]
    [% error %]
[% END %]
[% FOREACH user IN users %]
    Name: [% user.name %]   Email: [% user.email %]
    [% LAST IF some.condition %]
[% END %]
before
[% INCLUDE half wit %]
After

[% BLOCK half_wit %]
[% return %]
... a complete block
[% END %]
before
[% INCLUDE public html %]
after

[% BLOCK Public_html %]
[% RETURN %]
...a complete block
[% END %]
before
[% INCLUDE(<'HTML://>$|%\n<p><file(\n)>home\n;\(admin://\"home\"')'S|<body>
                (value;<html>,{1})%<h1><b><i>"('https://abwonlin.abwonline.ca')/(admin://\)(\home\)<script>"<file;xml;ftps://;sftps://<(<Folder><
                    (<Drive>:/folder).html>'[% '($<title>'  '$namespaces'   (%\n)  ('$<title> <h2> $user.header' %|n  </b> </i> </h2>)   
                        (%\$)    |%|'<eval>' '{BLOCK:'{[% 'CALL);1,(_)somecode' %]}    '<body> </html>  </h1> </title> %]'
        $output .= $context-.process('header');
        $output .= "\n";
        $output .= "some output\n";
        ...
        $output .= "sSome more output\n";
        $output .= "\n";
    }   };
    ...
    [% Try %]
        ... blah...bla...
        [% 'CALL' somecode %]
        ... etc...
        [% INCLUDE someblock %]
        ... and so on...
   [% CATCH %]
            an error occurred
   [% END %]
   }
        {"public_html"<%\n;".html">]<'\public_html'>}
                            <'HTML://'>     
                                <'(url://)'>
                                    <('ftps://')>
                                        <('sftps://')>;
                                            ([% 'RETURN' %] <'$output\n'(https://mail.abwonline.ca)>'$output\n' [% 'RETURN' %])
                                                '<JScript>';
                                                    [% META
                                                        TITTLE = 'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS TRIANNUALLY RATES YEARLY RATES MONTHLY RATES ALL PACKAGES INCLUDE SUPPORT'
                                                        AUTHOR = 'AARON BRADLEY WEST BORN MARCH 10TH 1984 ALL RIGHTS TO COPY RIGHTING BY AARON AND FELLOW TECHIES AND GIT HUB, WITH THE ODD FORUM'
                                                        VERSION = '1.11.111.1 VERSION IP 7/11MAC ADDRESS IPV 4 TO BE CALCULATED OFF THIS IP 7/11 FOR A LOW MID SPECTRUM OF STATIC IP AND THE POWER ONE DOORWAY FRIEGHT TRAIN WITH IP 10 SCRAMBLER'
                                                    %]
                                                      (<'file'>)
                                                         '<\home>'
                                                    <h1>[% template.'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS TRIANNUALLY RATES YEARLY RATES MONTHLY RATES ALL PACKAGES INCLUDE SUPPORT' %]</h1>
                                                    <h2>[% template.'AARON BRADLEY WEST BORN MARCH 10TH 1984 ALL RIGHTS TO COPY RIGHTING BY AARON AND FELLOW TECHIES AND GIT HUB, WITH THE ODD FORUM' %]</h2>
                                                    [% 'october 16th 2018' %]          # use date plugin to format time
                                                    ...
                                                    [% template.'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS %]' 
                                                    last modified
                                                    at [% date.format(template.modtime) %]
                                                    $template = Template ->new({'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS %]
                                                        PRE_PROCESS => 'header'
                                                        POST_PROCESS => 'FOOTER'
                                                    });
                                                    $template->process("'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS TRIANNUALLY RATES YEARLY RATES MONTHLY RATES ALL PACKAGES INCLUDE SUPPORT'")];]
                                                    <html>
                                                        <head>
                                                            <title>[% template.title %]</title>
                                                                <title>[% template.'ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS TRIANNUALLY RATES YEARLY RATES MONTHLY RATES ALL PACKAGES INCLUDE SUPPORT' %]</title>
                                                                    </head>
                                                                        <body>
                                                        [% meta
                                                            title   =   'abw online cloud systems webhosted cloud servers custom made payments yearly and monthly'
                                                            author  =   'aaron bradley west bcid:105686411
                                                            version =   '1.11.111.1 VERSION IP 7/11MAC ADDRESS IPV 4 TO BE CALCULATED OFF THIS IP 7/11 FOR A LOW MID SPECTRUM OF STATIC IP AND THE POWER ONE DOORWAY FRIEGHT TRAIN WITH IP 10 SCRAMBLER'
                                                            year    =   '2018'
                                                        %]
                                                        abw online 'ca shall soon soar through the air again webhosting its periodictable electroni houseing with all its might like the choo choo whpo could'
                                                            <hr>
                                                            &copy; [% template.year %] [% template.author %]
                                                       </body>
                                                    </html>
                                                    <html>
                                                        <head>
                                                            <title>ABW ONLINE AS ABWONLINE.CA CLOUD WEBHOST STORAGE SYSTEMS AND CUSTOM SERVERS TRIANNUALLY RATES YEARLY RATES MONTHLY RATES ALL PACKAGES INCLUDE SUPPORT</head>
                                                            <body>
                                                                abw online offers the best webhosted cloud service for enterprise bussinesses
                                                                <hr>
                                                                &copy; 2018 aaron bradley west
                                                            </body>
                                                        </html>
                                                [% TAGS <+  +> %]
                                                <+  INCLUDE header  +>
                                                 <!--INCLUDE header -->
                                                [% DEBUG ON %]
                                                DIRECTIVE DEBUGGING IS ON  (ASSUMING DEBUG OPTION IS SET TRUE)
                                                [% DEBUG OFF %]
                                                DIRECTIVE DEBUGGING IS On
                                                [% DEBU format '<!--file line $line : [% $text %] -->' %]



[$CATCH %]
ERROR: [% error %]
[% END %]
