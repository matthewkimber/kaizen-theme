$(document).ready(function() {
    Initialize();
});

function Initialize() {
    CreateFormContainer();
    RearrangeFooter();
    FixUnfuddleLayout();
    SetupSearchBox();
    SetupEvents();
}

function SetupSearchBox() {
    $("input.txtsearchbox").val("Search");
    ChangeTheSearchBoxFontColor("#888");
}

function CreateFormContainer() {
    $("#aspnetForm").wrap("<div id=\"container\" />");
}

function RearrangeFooter() {
    $("#FooterDiv").appendTo($("body"));
    $("#FooterDiv").wrap("<div id=\"footer\" />");
}

function FixUnfuddleLayout() {
    $("#UnfuddleTicketsDiv tr td:nth-child(3)").css("text-align", "right");
    $("#UnfuddleTicketsDiv tr td:nth-child(3)").css("font-style", "italic");
    $("#UnfuddleTicketsDiv tr td:nth-child(5)").css("display", "none");
    $("#UnfuddleTicketsDiv tr td:nth-child(4)").css("display", "none");
    $("#UnfuddleTicketsDiv tr td:nth-child(1)").css("display", "none");
    $("#UnfuddleTicketsDiv tr").removeClass("priority_{priority}");
    $("#UnfuddleTicketsDiv tr").removeClass("tablerow");
    $("#UnfuddleTicketsDiv td").removeClass("priority_3");
    $("#UnfuddleTicketsDiv td").addClass("TicketCell");
    $("#UnfuddleTicketsDiv tr").addClass("TicketRow");
    $("#UnfuddleTicketsDiv tr:nth-child(odd)").addClass("TicketAlternatingRow");
}

function ChangeTheSearchBoxFontColor(color) {
    $("input.txtsearchbox").css("color", color);
}

function SetupEvents() {
    $("input.txtsearchbox").bind("focus", function() {
        $("input.txtsearchbox").val("");
        ChangeTheSearchBoxFontColor("#000");
    });

    $("input.txtsearchbox").bind("blur", function() {
        $("input.txtsearchbox").removeClass(".txtsearchboxactive");
        SetupSearchBox();
    });
}