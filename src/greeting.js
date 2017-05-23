/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'stranger';
    var place = params.place || 'i/o insights fv richard';
    var challenge = params.challenge || 'no challenge';
    return {"challenge": challenge};
}
