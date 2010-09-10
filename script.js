$(document).ready(function()
{
    $("#aspnetForm").wrap("<div id=\"container\" />");
    $("#FooterDiv").appendTo($("body"));
    $("#FooterDiv").wrap("<div id=\"footer\" />");
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
});