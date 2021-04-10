/**
 ** Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

*?For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
*!If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

*?For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
*!If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

*?For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

**Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.
 */

class Solution {
    //?fastest execution and most memory efficient
    static numUniqueEmails(emails){
        const r = /(\.(?=[^@]+@))|(\+.+(?=@))/g;
    return new Set(emails.map((item) => {
        return item.replace(r, '');
    })).size;
    }
    static numUniqueEmails(emails){
        let reg = new RegExp("[.]","g");
        for(let i=0;i<emails.length;i++){
            let [local,domain] = emails[i].split("@");
            local = local.replace(reg,"");
            let plus = local.indexOf("+");
            local = plus!==-1 ? local.slice(0,plus) : local;
            //domain = domain.replace(reg,"")
            emails[i] = local+"@"+domain;
        }
        //*faster than below while loop
        emails = [...new Set(emails)];
        //!slows down the process
        // let i=0;
        // while(i<emails.length){
        //     let j=i+1;
        //     while(j<emails.length){
        //         if(emails[i]===emails[j]){
        //             console.log("deleting at ",j,"->",emails[j])
        //             emails.splice(j,1)
        //         }
        //         else j++;
        //     }
        //    i++;     
        // }
        console.log(emails)
    }
}

Solution.numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
Solution.numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])
Solution.numUniqueEmails(["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"])